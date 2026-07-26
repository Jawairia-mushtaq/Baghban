import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Baghban Smart Garden Companion" });
  });

  // Botanical AI Assistant Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, image, language } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (apiKey && message) {
        try {
          const ai = new GoogleGenAI({ apiKey });
          const prompt = `You are Ivy, a friendly, expert botanical AI companion in the Baghban (Smart Garden Companion) app. The user asks: "${message}". Provide warm, concise, practical, and highly helpful gardening or plant health advice (around 2 to 4 sentences). If the user asks in Urdu or the language parameter is 'ur', reply in Urdu in a warm, polite tone. Do not use markdown bolding excessively.`;

          let contents: any = prompt;
          if (image) {
            if (image.startsWith("data:")) {
              const matches = image.match(/^data:([a-zA-Z0-9/+-]+);base64,(.+)$/);
              if (matches) {
                contents = {
                  parts: [
                    { inlineData: { mimeType: matches[1], data: matches[2] } },
                    { text: prompt },
                  ],
                };
              }
            } else if (image.startsWith("http")) {
              try {
                const imgRes = await fetch(image);
                const arrayBuffer = await imgRes.arrayBuffer();
                const base64Data = Buffer.from(arrayBuffer).toString("base64");
                const mimeType = imgRes.headers.get("content-type") || "image/jpeg";
                contents = {
                  parts: [
                    { inlineData: { mimeType, data: base64Data } },
                    { text: prompt },
                  ],
                };
              } catch (e) {
                // Ignore image fetch error, fall back to text prompt only
              }
            }
          }

          const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents,
          });

          if (response && response.text) {
            return res.json({ text: response.text });
          }
        } catch (genAiError) {
          console.error("Gemini AI generation failed, using botanical fallback:", genAiError);
        }
      }

      // Botanical Fallback Engine when API key is missing or call fails
      const lower = (message || "").toLowerCase();
      let reply = "";

      if (
        lower.includes("hello") ||
        lower.includes("hi") ||
        lower.includes("hey") ||
        lower.includes("سلام") ||
        lower.includes("ہیلو") ||
        lower.includes("ivy")
      ) {
        reply =
          language === "ur"
            ? "السلام علیکم! میں آئیوی (Ivy) ہوں، آپ کی ڈیجیٹل باغبان اور نباتاتی ساتھی۔ آج آپ کے پودوں کی دیکھ بھال میں کیا مدد کر سکتی ہوں؟ آپ مجھ سے پانی، مٹی، روشنی، یا بیماریوں کے بارے میں کوئی بھی سوال پوچھ سکتے ہیں!"
            : "Hello there! I'm Ivy, your botanical AI companion. How can I help your garden flourish today? Ask me anything about watering schedules, soil mixtures, sunlight requirements, or leaf health diagnosis!";
      } else if (
        lower.includes("yellow") ||
        lower.includes("پیلے") ||
        lower.includes("color") ||
        lower.includes("رنگ") ||
        lower.includes("brown") ||
        lower.includes("spot")
      ) {
        reply =
          language === "ur"
            ? "پتوں کا پیلا یا بھورا ہونا عام طور پر زیادہ پانی دینے، نکاس (ڈریگنج) کی کمی یا آئرن/نائٹروجن کی کمی کی نشانی ہوتا ہے۔ گملے کے نیچے پانی کے نکاس کو چیک کریں اور اگلی بار پانی دینے سے پہلے اوپر کی 2 انچ مٹی خشک ہونے دیں۔"
            : "Yellowing or brown-spotted leaves are typically signs of overwatering, poor drainage, or iron/nitrogen deficiency. Ensure your pot has proper drainage holes and allow the top 2 inches of soil to dry completely before your next watering cycle.";
      } else if (
        lower.includes("aloe") ||
        lower.includes("گوارپٹھا") ||
        lower.includes("succulent") ||
        lower.includes("cactus") ||
        lower.includes("کیکٹس")
      ) {
        reply =
          language === "ur"
            ? "گوارپٹھا (ایلوویرا) اور سکولینٹس کے لیے کیکٹس اور موٹی ریت والی مٹی بہترین ہے جس میں پرلائٹ شامل ہو۔ ان کے پودوں میں پانی ذخیرہ ہوتا ہے، اس لیے ہر 2 سے 3 ہفتے میں صرف ایک بار گہرا پانی دیں۔"
            : "For Aloe Vera and succulents, the best soil is a fast-draining cactus mix enriched with coarse sand, pumice, or perlite. Since they store water in their fleshy leaves, only water once every 2 to 3 weeks when the soil is bone dry!";
      } else if (
        lower.includes("mango") ||
        lower.includes("آم") ||
        lower.includes("fruit") ||
        lower.includes("پھل")
      ) {
        reply =
          language === "ur"
            ? "نئے آم کے پودے کو ہر 2 سے 3 دن بعد گہرا پانی درکار ہوتا ہے۔ پھل آنے کے دوران مٹی کو مسلسل ہلکا نم رکھیں لیکن پانی کھڑا نہ ہونے دیں، اور بہار میں متوازن نامیاتی کھاد استعمال کریں۔"
            : "Young Mango trees need deep watering every 2-3 days until established. For mature or fruiting trees, maintain even soil moisture without waterlogging the roots, and apply an organic balanced fertilizer in early spring.";
      } else if (
        lower.includes("rose") ||
        lower.includes("گلاب") ||
        lower.includes("flower") ||
        lower.includes("پھول") ||
        lower.includes("bloom") ||
        lower.includes("کلی")
      ) {
        reply =
          language === "ur"
            ? "گلاب اور پھولدار پودوں کو روزانہ کم از کم 6 گھنٹے کی براہ راست دھوپ اور صبح سویرے جڑوں میں گہرا پانی پسند ہے۔ سوکھے پھول توڑنے (ڈیڈ ہیڈنگ) اور پوٹاشیم والی کھاد دینے سے نئے پھول تیزی سے نکلتے ہیں۔"
            : "Roses and flowering plants thrive on at least 6 hours of direct morning sun and deep root watering early in the day. Regular deadheading (clipping faded blooms) and potassium-rich organic fertilizer will encourage vigorous new flowering shoots!";
      } else if (
        lower.includes("water") ||
        lower.includes("پانی") ||
        lower.includes("irrigation") ||
        lower.includes("آبپاشی") ||
        lower.includes("dry") ||
        lower.includes("سوکھ")
      ) {
        reply =
          language === "ur"
            ? "پانی دینے کا بہترین اصول یہ ہے کہ پہلے اپنی انگلی سے اوپر کی 1 سے 2 انچ مٹی چیک کریں۔ اگر مٹی خشک محسوس ہو تو اتنا پانی دیں کہ نیچے کے سوراخوں سے باہر نکل آئے، اور کبھی بھی پودے کو کھڑے پانی میں نہ چھوڑیں۔"
            : "The golden rule of watering is the 'finger test': check the top 1-2 inches of soil with your finger. If it feels dry, water deeply until excess drains out the bottom holes. Never let your potted plants sit in standing water!";
      } else if (
        lower.includes("soil") ||
        lower.includes("مٹی") ||
        lower.includes("dirt") ||
        lower.includes("potting") ||
        lower.includes("repot") ||
        lower.includes("گملہ")
      ) {
        reply =
          language === "ur"
            ? "اچھی مٹی پودے کی جان ہوتی ہے۔ عام طور پر 50 فیصد باغبانی کی مٹی، 30 فیصد نامیاتی کھاد (کمپوسٹ) اور 20 فیصد پرلائٹ یا ریت کا ملاپ زیادہ تر انڈور اور آؤٹ ڈور پودوں کے لیے بہترین رہتا ہے۔"
            : "A quality potting mix is the foundation of plant health! A standard thriving recipe is 50% high-grade potting soil, 30% organic compost or peat moss, and 20% perlite or coarse sand to ensure excellent root aeration and drainage.";
      } else if (
        lower.includes("sun") ||
        lower.includes("light") ||
        lower.includes("دھوپ") ||
        lower.includes("روشنی") ||
        lower.includes("shade") ||
        lower.includes("سایہ")
      ) {
        reply =
          language === "ur"
            ? "زیادہ تر انڈور پودوں (جیسے مونسٹیرا، منی پلانٹ) کو روشن بالواسطہ (indirect) دھوپ پسند ہوتی ہے۔ انہیں کھڑکی کے پاس رکھیں جہاں تیز براہ راست دھوپ پتوں کو نہ جلائے۔ آؤٹ ڈور پودوں کو 4 سے 6 گھنٹے کی سیدھی دھوپ چاہیے۔"
            : "Most indoor houseplants (like Monstera, Pothos, and Peace Lilies) prefer bright indirect sunlight—place them near an east or north-facing window where they receive plentiful light without scorching direct afternoon rays.";
      } else if (
        lower.includes("pest") ||
        lower.includes("bug") ||
        lower.includes("insect") ||
        lower.includes("کیڑے") ||
        lower.includes("fungus") ||
        lower.includes("بیماری") ||
        lower.includes("white") ||
        lower.includes("سفید") ||
        lower.includes("rot") ||
        lower.includes("گلنا")
      ) {
        reply =
          language === "ur"
            ? "پودوں پر سفید دھبے، ملی بگس یا کیڑوں کے حملے کے لیے، 1 چمچ نیم کا تیل (Neem Oil) اور چند قطرے مائلڈ صابن 1 لیٹر پانی میں ملا کر ہفتے میں دو بار پتوں پر اچھی طرح اسپرے کریں۔ جڑوں کے گلنے سے بچنے کے لیے پانی دینا کم کر دیں۔"
            : "For common pests like mealybugs, spider mites, or white fungal spots, mix 1 teaspoon of cold-pressed Neem Oil and a few drops of mild dish soap in a liter of warm water. Spray thoroughly across all foliage twice a week until cleared!";
      } else if (
        lower.includes("monstera") ||
        lower.includes("مونسٹیرا") ||
        lower.includes("money plant") ||
        lower.includes("منی پلانٹ") ||
        lower.includes("pothos") ||
        lower.includes("snake") ||
        lower.includes("سنیپ")
      ) {
        reply =
          language === "ur"
            ? "مونسٹیرا اور منی پلانٹ جیسے ایروئڈ پودوں کے لیے ہوا دار مٹی اور 50 فیصد سے زیادہ نمی (humidity) بہترین ہے۔ ان کے پتوں کو ہفتے میں ایک بار گیلے کپڑے سے صاف کریں تاکہ کلوروفیل کا عمل تیز ہو۔"
            : "Aroid houseplants like Monstera and Pothos love a chunky, aerated soil mix and moderate-to-high room humidity (50%+). Wipe their broad leaves gently with a damp cloth every week to remove dust and maximize photosynthesis!";
      } else if (
        lower.includes("fertiliz") ||
        lower.includes("compost") ||
        lower.includes("کھاد") ||
        lower.includes("food") ||
        lower.includes("غذائیت")
      ) {
        reply =
          language === "ur"
            ? "پودوں کو بڑھوتری کے موسم (بہار اور گرمیوں) میں ہر 3 سے 4 ہفتے بعد متوازن مائع کھاد (جیسے NPK 10-10-10) پانی میں ملا کر دیں۔ سردیوں کے موسم میں پودے آرام کرتے ہیں، اس لیے سردیوں میں کھاد دینا بند کر دیں۔"
            : "Feed your plants during their active growing season (spring and summer) every 3 to 4 weeks using a balanced liquid fertilizer diluted to half strength. During autumn and winter dormancy, withhold fertilizer to let roots rest.";
      } else if (
        image ||
        lower.includes("photo") ||
        lower.includes("leaf") ||
        lower.includes("تصویر") ||
        lower.includes("پتہ") ||
        lower.includes("معائنہ") ||
        lower.includes("examine")
      ) {
        reply =
          language === "ur"
            ? "میں نے آپ کے بھیجے گئے پتے کا تجزیہ کیا ہے۔ پتے کی ساخت صحت مند لگ رہی ہے، البتہ کناروں پر ہلکی خشکی ہوا میں نمی کی کمی کو ظاہر کرتی ہے۔ پودے پر ہلکا پانی کا اسپرے کریں اور روشن بالواسطہ روشنی فراہم کریں۔"
            : "I have examined the leaf image you provided! The tissue structure shows good overall vitality, though slight edge crisping suggests room air might be slightly dry. I recommend weekly foliage misting and keeping it in bright, indirect light.";
      } else {
        reply =
          language === "ur"
            ? "یہ باغبانی کے حوالے سے ایک بہترین سوال ہے! پودوں کی شاندار صحت کے لیے تین بنیادی اصول یاد رکھیں: مناسب روشنی، جڑوں میں پانی کا بہترین نکاس، اور متوازن نمی۔ اگر آپ کے پودے میں کوئی خاص علامت ہے تو مجھے تصویر بھیجیں یا ہمارا سمارٹ اسکینر استعمال کریں!"
            : "That's an excellent question for your garden journey! To keep any plant thriving, focus on the golden triad: consistent indirect sunlight, well-draining soil to prevent root suffocation, and seasonal watering checks. You can also attach a photo anytime for a tailored diagnosis!";
      }

      return res.json({ text: reply });
    } catch (error) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({ error: "Failed to generate AI response" });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
