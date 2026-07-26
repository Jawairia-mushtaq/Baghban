import { Plant, Reminder, GardenTask } from '../types';

export const USER_PROFILE_IMAGES = {
  main: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGibiLXz0yjm3XOqoJROcILS3mpcEcoHTe3NPObvMOS9m_cazuy5ttQJhqrNYpepTLHlpv82Rp9YDR9Xxs6KkjylZutxYdYMvm43NXNLLTZj-2BONgmMZfzmN909NH_f9xCvzvVcb65dM3rMVrfeLx7t5HbU68kJ_JmDN7kjMvq-40A-NDQ4W66Okro_w8iEhO7txID7djvfzPJf-FPXkTjzWOdNUhFMS4UgXAZPKoqWgSZVdH19Ll5SGrlldG7bhFuTbjWIu1LV4",
  settings: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgN8VGeQhdOKKG8VCl67aSKbwrtuxa5bB6wSOx21NlIB5xw3Bj2nWcOBmB03St4uWMfIVy3rsIPGSPYMnY5UXO4ePakaqEfOsZ1__4FLasIW58l0L4fc71ZpXXVhRUhG55b2Vqmn7PP6sKCMRWVNLhe-5Il9sZO_WydOIHwA8X2FWhio1vcZ5qU-FkoqzzOx3E4eW5odookJa-A9vv2NN6GEbCmH7-Z4qBrNV9swsnZFBYXvGxouypi2hjtcPpTKqsUI0Mbui5h3g",
  calendar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpnq0QzOgQqqbsT-X5OpWZjAAGHBkjC0iFVMlLeF06lWBYt_nRjNt1jo_ks6f3_ldaNh-OQhOKoKa0oG-nQEXAp5CL_393KeSD7oUatbTwtRZpb5e9HhQLY8fah1Xzvv7iRXvH0Jog4sA173oZHeUNNBHizt6R-yhXBHauwo9B0bRdYQh_dxMZ2hqcjhBLpWYq5CGuvTdyP05VDWLSXi0RKUr8KWD3-Tbx2BCL0TewjJorUx9vJhTO2zw_kOurE1HmB1HyRumFjjY",
  library: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwvTfYkhdibC_QNHR3aHv_NYniCs9523dWJ_mLOASrpCSyBAr7YrdBs25eEnef6SSMCkYHdtnpkONBI78-VyO6Jp6XyUZxKgLfPn2taAyuIhN5hYy-HxOZIi2pPradcQwvi9XEiHe7mWjyhgTDtr_KCzo-QEN6qjD7rzhFKz6vKi2jxspw1SdVmNvAp6fTEh_fORrNjoO30VRY-0PXKKCqw6TJRPSplbQRuSMJZs-tQb1w4ZDq-jVcCgAs5UXk8Msggakbu_pbakM"
};

export const IVY_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCycX0o2NBPjqmDQwQTPwhksGCoichZocPPxuvVAtb9cWbm8VqPCmK08fbJGm1XN-l-_qo7FKyUlbOdBT78KucqtARyJdS1XXHFiAin9-68B1wPt5E2YVFGwwZPSTgHsotpNQlLfn5aPoWRqhnvczu-o-aYYAbJY0geyiGf8HCHBc3vJ2AXYAETS3jrvXkq47S-U8obbWS42AdWzpY3U_uQ9dijsYKfOWSkXXgl3e0MjKC0-IEiN7X0BqyHOuxDo_IdnA76kreFixE";
export const LOGO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB14cwpv9MetHvuBsc8zthv-g94YjQ28vGDcvEnkq-wTfEtGKrwkk_yrpUK98FjpDhixwl5RMw_IIX1sasOa_CTdos7MqC0CFZxlt_AwodmDEDcgJmOo_lMNyyLeSMdPM7zAKoEt7E6CtBpEx0nXAtIFwt619wr0EYNDmu1tAgZAdsQcweuHRO3T_UCoO-7CPKHV-SRyWECygIZP4kaGM7dinILuV8iJgYnjw_J5l28Yc0AU9KV1jA0DPTYl51bR6CLUCTd4Zt2g1A";

export const ONBOARDING_SLIDES = [
  {
    title: "Welcome to your Digital Garden",
    titleUrdu: "آپ کے ڈیجیٹل باغ میں خوش آمدید",
    desc: "Bring your plants to life with technology that understands nature's heartbeat.",
    descUrdu: "اپنے پودوں کو ایسی ٹیکنالوجی کے ساتھ زندہ کریں جو فطرت کی دھڑکن کو سمجھتی ہے۔",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh2HLGjWoZc0qYgGl-JfwMy2iZp2N1wmgCnFnDVuUsu-PuvZRIkRGYBHxpLcc3LBKApqZijMjUQ5Ved2aYYOSb9NbRKcMRsRfVpRpVG18jRINcRkZje12qmJIw5Ml4gMP1nFTLdA22jzwTgtVmvNvBh_Mm8GaA7KpcrhCpjKcldYgj-o4iQeWuhcj5FFD_pxc38QUPOAv7YQHpOnUcf9xgSIBapnwYTMvYoXSh43qvMEF48bruBG7HXqraKE39tQF4gCh9rQ9_7Bo"
  },
  {
    title: "AI-Powered Care",
    titleUrdu: "اے آئی سے چلنے والی دیکھ بھال",
    desc: "Identify issues instantly with our smart scanner and chat with expert AI assistants for 24/7 care.",
    descUrdu: "ہمارے سمارٹ سکینر کے ذریعے مسائل کی فوری شناخت کریں اور ماہر اسسٹنٹس سے بات کریں۔",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3jCUKiM9TbJerX-HK1jeUqC_8oXnj4oN-ouHmOE4dv6OBUYdZoa8VGJbZuVw6THTAzj5OkFdY98kVXFQuVaA6OnWuDo-scIoKEbI8AxxRkYnpbhUn4YJA_Re29C2SRhwT-GDyw4nnwosuOiZ0q4za3X_ResxUpp-SlBKWBaZcz3v3xdZTNp0alSi_ytNX5BqBKY-pJWdB6C1AgR9z8urKrcVK_Z5vt3AyadN309hG1dWqv82D2cbb9jhIg7581c13N8Rmz7NV6yA"
  },
  {
    title: "Grow with Confidence",
    titleUrdu: "اعتماد کے ساتھ اگائیں",
    desc: "Never miss a watering again with personalized reminders and expert horticultural guides.",
    descUrdu: "ذاتی نوعیت کی یاد دہانیوں اور ماہرانہ تجاویز کے ساتھ کبھی بھی پانی دینا نہ بھولیں۔",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyoWHrL365nSGnbTrNpbbmG82Fi8_tOj3keAjNVK_q7jL3tAb8ZlKOIB2kOOVCXwZIa31lDMJtcU0-n4qxTmzA8wo5MwDB1qOMz6IpokNH35iSKgOmFnfH-R_ZidnaNf5tZgvkkMqVbouuzEXDXFFN5JhvOSaTiKACRAi95RNZM_ZtCQ20eSLr471dbW3vn4SdVn8q7AGyWh1rOYWSrv7G2urRRqLSs0vpLtCP3EFUMTDU8Sl_krDNk9CxoZNS0NEyqTJM5VWrkc8"
  }
];

export const PLANTS_DATA: Plant[] = [
  {
    id: "mango",
    name: "Mango",
    nameUrdu: "آم",
    scientificName: "Mangifera indica",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOObwfOgFS2Pz4ASdtSslauZIVyfIEGlQkimTTC53_ojdim0Q6i8_aZJ38hDHF4lIG_R3D4kynBhMo6BLC-Jr1onOQC4d4LhlaHHnpbTuEFAS7XT14GplBb4Hu0-zpvZzH5iNnSEWxklV84UAutQQVXinBbN7yPgZ63ZJfFVfxDP5jgu05fRTn_pxAWTKKDkL4Ngz6l14-f1RUeg1vZ5nIDIsDgKhSZOqAnIvZJWKtn_gDuCldGz_TZWfy1G8azFEBmKBxwcwY15o",
    category: "fruit",
    status: "Healthy",
    statusUrdu: "صحت مند",
    health: "Excellent",
    healthUrdu: "بہترین",
    waterFrequency: "3 Days",
    waterFrequencyUrdu: "3 دن",
    lastWatered: "Last watered yesterday",
    lastWateredUrdu: "آخری بار کل پانی دیا گیا",
    recommendedWaterLeft: "Recommended: 2 days left",
    recommendedWaterLeftUrdu: "تجویز کردہ: 2 دن باقی ہیں",
    sunlight: "Full Sun",
    sunlightUrdu: "مکمل دھوپ",
    nextFertilize: "Sunday",
    nextFertilizeUrdu: "اتوار",
    age: "Healthy • 12 days old",
    ageUrdu: "صحت مند • 12 دن پرانا",
    careGuide: {
      overview: {
        text: "The Mango (Mangifera indica) is a majestic tropical evergreen known for its sweet, succulent fruit. It requires deep, well-draining soil and a tropical or subtropical climate to thrive. Proper care during the early growth stages is crucial for long-term health and fruit production.",
        textUrdu: "آم (Mangifera indica) ایک شاندار استوائی سدا بہار درخت ہے جو اپنے میٹھے اور رسیلے پھل کے لئے جانا جاتا ہے۔ اس کی بہترین نشوونما کے لئے گہری، اچھی نکاسی والی مٹی اور گرم مرطوب آب و ہوا کی ضرورت ہوتی ہے۔",
        list: ["Growth rate: Fast in growing season", "Ideal temperature: 24°C - 32°C"],
        listUrdu: ["نشوونما کی شرح: موسم گرما میں تیز", "مثالی درجہ حرارت: 24°C سے 32°C"]
      },
      watering: {
        text: "Young mango trees need frequent watering (every 2-3 days) until established. Once mature, they are drought-tolerant but benefit from regular water during flower and fruit development.",
        textUrdu: "نئے لگائے گئے آم کے پودوں کو جڑیں مضبوط ہونے تک کثرت سے پانی (ہر 2-3 دن بعد) کی ضرورت ہوتی ہے۔ پختہ درخت خشک سالی برداشت کر سکتے ہیں۔",
        list: ["Water deeply to reach root ball", "Avoid wetting the foliage to prevent fungi"],
        listUrdu: ["جڑوں تک پہنچنے کے لئے گہرا پانی دیں", "پتوں کو گیلا کرنے سے گریز کریں"]
      },
      sunlight: {
        text: "Mangoes need as much sun as possible. A minimum of 6-8 hours of direct sunlight is required for fruit production. In cooler climates, plant near a south-facing wall.",
        textUrdu: "آم کو زیادہ سے زیادہ دھوپ کی ضرورت ہوتی ہے۔ پھل کی پیداوار کے لئے کم از کم 6 سے 8 گھنٹے کی براہ راست دھوپ لازمی ہے۔",
        list: ["Full sun essential", "Provide wind protection for young trees"],
        listUrdu: ["مکمل دھوپ لازمی ہے", "نئے پودوں کو تیز ہوا سے بچائیں"]
      },
      soil: {
        text: "Thrives in various soil types but prefers rich, well-drained loam. Soil pH should ideally be between 5.5 and 7.5.",
        textUrdu: "مختلف قسم کی مٹی میں پنپتا ہے لیکن زرخیز اور اچھی نکاسی والی مٹی کو ترجیح دیتا ہے۔ مٹی کا pH 5.5 سے 7.5 کے درمیان ہونا چاہئے۔",
        list: ["Ensure good drainage", "Incorporate organic compost before planting"],
        listUrdu: ["اچھی نکاسی کو یقینی بنائیں", "لگانے سے پہلے نامیاتی کھاد شامل کریں"]
      },
      fertilizer: {
        text: "Feed young trees monthly with a balanced NPK fertilizer. For mature trees, apply nitrogen-heavy fertilizer in spring and potassium-rich fertilizer during fruiting.",
        textUrdu: "نئے پودوں کو ماہانہ متوازن NPK کھاد ڈالیں۔ پختہ درختوں کو بہار میں نائٹروجن اور پھل آنے پر پوٹاشیم والی کھاد دیں۔",
        list: ["Avoid over-fertilizing during bloom", "Use organic mulch to retain nutrients"],
        listUrdu: ["پھول آنے پر ضرورت سے زیادہ کھاد دینے سے گریز کریں", "غذائیت برقرار رکھنے کے لئے کھاد کی تہہ لگائیں"]
      }
    },
    commonIssues: [
      {
        name: "Powdery Mildew",
        nameUrdu: "پاؤڈری پھپھوندی",
        description: "White powdery spots on leaves and flowers. Common in humid conditions.",
        descriptionUrdu: "پتوں اور پھولوں پر سفید پاؤڈر جیسے نشانات۔ مرطوب حالات میں عام ہے۔",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaIMq3usBRRTnL1mAcrnwJnV_tLROmfJl8Ccz9YKne64nMp7uV0fltnnuicdqOggOhql8ZUzMWsQbpOnNS4h3j4SAnWZYjsYCfZdNg7vr0Eqdxh9oZ7TNf4YlOx8oHq4VU2Yo7EjtVemMk4a0vsS-HY9Ik3oddqxS5zAD33-kHoydT2j4oiUejX-tnQ_uvkqvW6yF8Cv-FFlz0Beyzakase0G9vWXIh0CCGIO2Mp9v7B78Q0kd7_o5G4C4e5VebRNe5KPkrQbvfOQ",
        treatment: [
          "Prune affected branches to improve airflow.",
          "Apply organic sulfur or neem oil fungicide spray early in the morning.",
          "Avoid overhead watering during humid evenings."
        ],
        treatmentUrdu: [
          "ہوا کے گزر کو بہتر بنانے کے لئے متاثرہ شاخیں کاٹ دیں۔",
          "صبح سویرے نامیاتی سلفر یا نیم کے تیل کا اسپرے کریں۔",
          "شام کے وقت پتوں پر پانی ڈالنے سے گریز کریں۔"
        ]
      }
    ]
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    nameUrdu: "انار",
    scientificName: "Punica granatum",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYbz1GXBzL7Wrbi0wGsY7m02m9YuzCY-n7OhV1L7iN1T2iEZssqFxNJT1NqMpVhS4jx1vD2HJVMKsEb735ywzkiU4d0O37_KGgCa_lqo8ZNhdrPOvL6m_sZsm0llaZ6qj3GDgSm3gSO6oovYwo4jsR0jH3R-sqP3Z_-BAttuYI0_xLr3h7I-1MpMO4jsUyDK6J0-c_32lUr33vXYXq8ppuCfoqrKgxNovkFxdMw3kpJAD-FlNK-rUeGIkZGvWf9eNrt2RNRAKIW8o",
    category: "fruit",
    status: "Thirsty",
    statusUrdu: "پیاسا",
    health: "Good",
    healthUrdu: "اچھا",
    waterFrequency: "4 Days",
    waterFrequencyUrdu: "4 دن",
    lastWatered: "Last watered 4 days ago",
    lastWateredUrdu: "آخری بار 4 دن پہلے پانی دیا گیا",
    recommendedWaterLeft: "Due: Today",
    recommendedWaterLeftUrdu: "آج پانی دینا لازمی ہے",
    sunlight: "Full Sun",
    sunlightUrdu: "مکمل دھوپ",
    nextFertilize: "Next week",
    nextFertilizeUrdu: "اگلے ہفتے",
    age: "Fruiting • 2 years old",
    ageUrdu: "پھل دار • 2 سال پرانا",
    careGuide: {
      overview: {
        text: "Pomegranates are resilient, drought-tolerant fruit shrubs producing jewel-like seeds rich in antioxidants. They enjoy hot summers and dry winters.",
        textUrdu: "انار ایک لچکدار اور خشک سالی برداشت کرنے والا پھل دار جھاڑی نما درخت ہے جو اینٹی آکسیڈنٹس سے بھرپور رسیلے دانے پیدا کرتا ہے۔",
        list: ["Drought tolerant once mature", "Produces ruby red arils in autumn"],
        listUrdu: ["پختہ ہونے پر خشک سالی برداشت کرتا ہے", "خزاں میں سرخ دانے تیار ہوتے ہیں"]
      },
      watering: {
        text: "While drought tolerant, regular watering during flowering and fruit setting prevents fruit splitting.",
        textUrdu: "اگرچہ خشک سالی برداشت کر لیتا ہے، لیکن پھول اور پھل بننے کے دوران باقاعدہ پانی دینے سے پھل پھٹنے سے بچ جاتا ہے۔",
        list: ["Water deeply once a week", "Avoid waterlogging the roots"],
        listUrdu: ["ہفتے میں ایک بار گہرا پانی دیں", "جڑوں میں پانی کھڑا نہ ہونے دیں"]
      },
      sunlight: {
        text: "Requires 6-8 hours of direct sunshine daily for abundant flowering and sweetest fruits.",
        textUrdu: "زیادہ پھولوں اور میٹھے پھلوں کے لئے روزانہ 6 سے 8 گھنٹے کی براہ راست دھوپ درکار ہے۔",
        list: ["Best in hot, sunny spots", "Tolerates light afternoon shade in extreme heat"],
        listUrdu: ["گرم اور دھوپ والی جگہوں پر بہترین", "شدید گرمی میں دوپہر کا ہلکا سایہ برداشت کرتا ہے"]
      },
      soil: {
        text: "Prefers well-drained sandy or loamy soil. Extremely adaptable to alkaline and rocky soils.",
        textUrdu: "اچھی نکاسی والی ریتلی یا چکنی مٹی کو ترجیح دیتا ہے۔ پتھریلی مٹی میں بھی آسانی سے ڈھل جاتا ہے۔",
        list: ["pH range: 5.5 to 7.0", "Add gravel for heavy clay soils"],
        listUrdu: ["pH حد: 5.5 سے 7.0", "چکنی مٹی کے لئے بجری شامل کریں"]
      },
      fertilizer: {
        text: "Apply organic compost in early spring. Avoid excessive nitrogen which promotes leafy growth over flowers.",
        textUrdu: "بہار کے اوائل میں نامیاتی کھاد ڈالیں۔ ضرورت سے زیادہ نائٹروجن سے گریز کریں کیونکہ اس سے پھولوں کی بجائے صرف پتے بڑھتے ہیں۔",
        list: ["Use bone meal for flower stimulation", "Feed twice during summer"],
        listUrdu: ["پھولوں کے لئے بون میل کا استعمال کریں", "گرمیوں میں دو بار کھاد دیں"]
      }
    }
  },
  {
    id: "lemon",
    name: "Lemon",
    nameUrdu: "لیموں",
    scientificName: "Citrus limon",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzeFrZ9F3WL-J1E20gHW-9j3AHEHvZ9TnsRMoqqK6aTTklKT6Y9ihbhnB_qT60WmyxklRl5UJKdRuo1r6tU-Ex-gFG74poPH2l9gApSvseJPe2iamud5A2wSy1Z1-Jts_AdoCA3-rIuLRtVUk1MpjvCCaGnH2_JdkQGnFNI9JYmIaQQ7qq3DzaDs4yDOieMapwwZ0CcuE3Q3Lhv_36y_xtNW0QZQoAtSJtbCWp8baqHXRV1T_qEpj-wRjTpxgu-mGnw9HtWjFug-U",
    category: "fruit",
    status: "Perfect",
    statusUrdu: "بہترین",
    health: "Flourishing",
    healthUrdu: "پھل پھول رہا ہے",
    waterFrequency: "5 Days",
    waterFrequencyUrdu: "5 دن",
    lastWatered: "Last watered 2 days ago",
    lastWateredUrdu: "آخری بار 2 دن پہلے پانی دیا گیا",
    recommendedWaterLeft: "Recommended: 3 days left",
    recommendedWaterLeftUrdu: "تجویز کردہ: 3 دن باقی ہیں",
    sunlight: "Full Sun",
    sunlightUrdu: "مکمل دھوپ",
    nextFertilize: "Tomorrow",
    nextFertilizeUrdu: "کل",
    age: "Blossoming • 1 year old",
    ageUrdu: "پھولوں سے لدا • 1 سال پرانا",
    careGuide: {
      overview: {
        text: "Citrus limon brings zesty freshness and fragrant white blossoms to balconies and patios. Thrives in sunny Mediterranean climates.",
        textUrdu: "لیموں کا پودا آپ کی بالکونی میں تازگی اور خوشبو دار سفید پھول لاتا ہے۔ دھوپ والے موسم میں بہترین بڑھتا ہے۔",
        list: ["Requires citrus-specific feed", "Fragrant flowers attract pollinators"],
        listUrdu: ["سِٹرس خصوصی کھاد کی ضرورت ہے", "خوشبو دار پھول تتلیوں اور شہد کی مکھیوں کو راغب کرتے ہیں"]
      },
      watering: {
        text: "Keep soil moderately moist. Allow top 2 inches to dry out before watering thoroughly.",
        textUrdu: "مٹی کو ہلکا نم رکھیں۔ پانی دینے سے پہلے اوپر کی 2 انچ مٹی کو خشک ہونے دیں۔",
        list: ["Good drainage is vital", "Use rainwater or filtered water if possible"],
        listUrdu: ["پانی کا نکاس بہت ضروری ہے", "اگر ممکن ہو تو بارش یا فلٹر شدہ پانی استعمال کریں"]
      },
      sunlight: {
        text: "Loves bright sunlight. Place in a sheltered, warm spot receiving at least 6 hours of sun.",
        textUrdu: "تیز دھوپ کو پسند کرتا ہے۔ ایسی گرم جگہ پر رکھیں جہاں کم از کم 6 گھنٹے دھوپ آئے۔",
        list: ["Rotate weekly if grown indoors", "Protect from cold winter drafts"],
        listUrdu: ["اگر کمرے میں ہو تو ہفتہ وار گھمائیں", "سردیوں کی تیز ہوا سے بچائیں"]
      },
      soil: {
        text: "Slightly acidic, loamy soil with excellent perlite or grit aeration.",
        textUrdu: "ہلکی تیزابی اور نرم مٹی جس میں ہوا کا گزر بہترین ہو۔",
        list: ["pH 6.0 - 6.5", "Repot every 2-3 years in spring"],
        listUrdu: ["pH 6.0 سے 6.5", "ہر 2 سے 3 سال بعد بہار میں نیا گملہ دیں"]
      },
      fertilizer: {
        text: "High-potassium and nitrogen citrus feed every two weeks during the growing season.",
        textUrdu: "نشوونما کے موسم میں ہر دو ہفتے بعد پوٹاشیم اور نائٹروجن سے بھرپور سِٹرس کھاد دیں۔",
        list: ["Stop feeding in deep winter", "Watch for iron deficiency (yellowing leaves)"],
        listUrdu: ["شدید سردیوں میں کھاد روک دیں", "آئرن کی کمی (پتوں کا پیلا ہونا) پر نظر رکھیں"]
      }
    }
  },
  {
    id: "jasmine",
    name: "Jasmine",
    nameUrdu: "چنبیلی",
    scientificName: "Jasminum officinale",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnBdaG6k5soiq5wATgmW14lyW1Vm_i8kMSFVTnpypsNT_vMcGs3w3S5UrHWo4aPfdDTSnY5YR2QPx9uGvZ9IDhWQ5iloVoySlcWqAOR7vH6kZyMtma-xhzh4x7uVbSPfbSLvNeJAmEzgq7iCTgBfCsP7yPyA-BUqKl1MMN-4A4IjMW7ld_t9u8cuVlIhj1jk7kWRskAFowlSRrJIEdd2-wzJvZ-JoZIqw-LBnDX7CLY2VVaVJxun-7i0BGpClYLDqYWeBZzMxt--4",
    category: "flowering",
    status: "Vibrant",
    statusUrdu: "چمکدار",
    health: "Fragrant",
    healthUrdu: "خوشبودار",
    waterFrequency: "2 Days",
    waterFrequencyUrdu: "2 دن",
    lastWatered: "Last watered today",
    lastWateredUrdu: "آخری بار آج پانی دیا گیا",
    recommendedWaterLeft: "Recommended: 2 days left",
    recommendedWaterLeftUrdu: "تجویز کردہ: 2 دن باقی ہیں",
    sunlight: "Partial Sun",
    sunlightUrdu: "جزوی دھوپ",
    nextFertilize: "In 3 days",
    nextFertilizeUrdu: "3 دنوں میں",
    age: "Fragrant • Dormant / budding",
    ageUrdu: "خوشبودار • کلیاں کھل رہی ہیں",
    careGuide: {
      overview: {
        text: "Known as the Queen of the Night, Jasmine produces starry white flowers with an intoxicating sweet fragrance that intensifies after dusk.",
        textUrdu: "رات کی رانی اور چنبیلی کے نام سے مشہور، یہ پودا ستارہ نما سفید پھول پیدا کرتا ہے جن کی میٹھی خوشبو شام کے بعد اور بھی تیز ہو جاتی ہے۔",
        list: ["Climbing vine or bushy shrub", "National flower of Pakistan"],
        listUrdu: ["چڑھنے والی بیل یا جھاڑی", "پاکستان کا قومی پھول"]
      },
      watering: {
        text: "Likes consistent humidity and moisture during summer blooming periods.",
        textUrdu: "گرمیوں میں پھول کھلنے کے دوران مٹی میں مسلسل نمی کو پسند کرتا ہے۔",
        list: ["Keep soil damp but never soggy", "Mist foliage on dry summer evenings"],
        listUrdu: ["مٹی کو نم رکھیں لیکن زیادہ پانی نہ بھریں", "خشک گرم شاموں کو پتوں پر پانی کا اسپرے کریں"]
      },
      sunlight: {
        text: "Enjoys morning sun and filtered afternoon shade. Too much scorching noon sun can burn delicate blossoms.",
        textUrdu: "صبح کی دھوپ اور دوپہر کا سایہ پسند کرتا ہے۔ دوپہر کی تیز دھوپ نازک پھولوں کو جھلسا سکتی ہے۔",
        list: ["4-6 hours of indirect sun", "Great for verandas and window boxes"],
        listUrdu: ["4 سے 6 گھنٹے کی بالواسطہ دھوپ", "برآمدے اور کھڑکیوں کے لئے بہترین"]
      },
      soil: {
        text: "Rich, organic humus soil with plenty of peat or coco coir for moisture retention.",
        textUrdu: "زرخیز نامیاتی مٹی جس میں نمی برقرار رکھنے کے لئے کوکو پیٹ شامل ہو۔",
        list: ["Mulch roots in hot weather", "Add compost every spring"],
        listUrdu: ["گرم موسم میں جڑوں پر کھاد کی تہہ لگائیں", "ہر بہار میں کمپوسٹ شامل کریں"]
      },
      fertilizer: {
        text: "Feed with phosphorus-rich flower booster every 10 days when buds start forming.",
        textUrdu: "جب کلیاں بننا شروع ہوں تو ہر 10 دن بعد فاسفورس سے بھرپور کھاد دیں۔",
        list: ["Prune after bloom cycle to encourage new shoots", "Use liquid seaweed extract"],
        listUrdu: ["پھول ختم ہونے کے بعد کٹائی کریں تاکہ نئی شاخیں نکلیں", "سمندری کائی کا مائع عرق استعمال کریں"]
      }
    }
  },
  {
    id: "motia",
    name: "Motia",
    nameUrdu: "موتیا",
    scientificName: "Jasminum sambac",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4I7iXF1EDGE3vyc5nX6noD19H1chstrUS1EEqmR7ikWSf3RW0dKxsGdQ59C9bvO2laIEQko_rYCNZ1xzJAtqevaAlnocYlNgDjmhdwpDDgF7Ra64yg7Fom1bFUeHLxn0y9vWExtsGFGQyjeKUztPnKvD83RhnMblh9Fw-xj2u7-fuLUa2n3V7PlsZ7XUtAUSLpe9J4nBWJVpM5xf09Ce8mFcOuFBQowtLRrP4UdtNKggS_kXmhHukBm8zKM--WM0zfdFrpcDosJw",
    category: "flowering",
    status: "Strong",
    statusUrdu: "مضبوط",
    health: "Robust",
    healthUrdu: "توانا",
    waterFrequency: "2 Days",
    waterFrequencyUrdu: "2 دن",
    lastWatered: "Last watered yesterday",
    lastWateredUrdu: "آخری بار کل پانی دیا گیا",
    recommendedWaterLeft: "Due tomorrow",
    recommendedWaterLeftUrdu: "کل پانی دینا ہے",
    sunlight: "Bright Sun",
    sunlightUrdu: "تیز دھوپ",
    nextFertilize: "Saturday",
    nextFertilizeUrdu: "ہفتہ",
    age: "Flowering • 6 months old",
    ageUrdu: "پھول دار • 6 ماہ پرانا",
    careGuide: {
      overview: {
        text: "Motia (Arabian Jasmine / Sambac) produces tightly wrapped pearl-like buds that open into intensely fragrant double flowers.",
        textUrdu: "موتیا موتی جیسی بند کلیاں پیدا کرتا ہے جو کھل کر انتہائی خوشبو دار سفید پھول بن جاتی ہیں۔",
        list: ["Used in traditional garlands and teas", "Blooms profusely in monsoon"],
        listUrdu: ["روایتی گجروں اور چائے میں استعمال ہوتا ہے", "مون سون میں کثرت سے پھول دیتا ہے"]
      },
      watering: {
        text: "Water generously during the warm flowering season. Reduce watering during cool winter dormancy.",
        textUrdu: "پھول کھلنے کے گرم موسم میں خوب پانی دیں۔ سردیوں کے موسم میں پانی کم کر دیں۔",
        list: ["Keep topsoil slightly moist", "Avoid wetting flowers directly"],
        listUrdu: ["اوپری مٹی کو ہلکا نم رکھیں", "پھولوں پر براہ راست پانی نہ ڈالیں"]
      },
      sunlight: {
        text: "Requires at least 5 hours of warm sunlight daily to produce abundant flower clusters.",
        textUrdu: "کثرت سے پھولوں کے گچھے حاصل کرنے کے لئے روزانہ کم از کم 5 گھنٹے کی دھوپ ضروری ہے۔",
        list: ["Thrives in warm, humid weather", "Protect from freezing frost"],
        listUrdu: ["گرم اور مرطوب موسم میں خوب پنپتا ہے", "شدید سردی کی کہر سے بچائیں"]
      },
      soil: {
        text: "Well-aerated loam mixed with aged cow manure or vermicompost.",
        textUrdu: "اچھی ہوا والی نرم مٹی جس میں پرانی گوبر کی کھاد یا ورمی کمپوسٹ شامل ہو۔",
        list: ["Rich organic content needed", "Replace top layer of soil annually"],
        listUrdu: ["زرخیز نامیاتی اجزاء ضروری ہیں", "ہر سال مٹی کی اوپری تہہ تبدیل کریں"]
      },
      fertilizer: {
        text: "Apply mustard cake solution or bone meal in spring for an explosion of motia pearls.",
        textUrdu: "بہار میں سرسوں کی کھلی کا پانی یا بون میل ڈالیں تاکہ موتیا کے بے شمار پھول کھلیں۔",
        list: ["Regular deadheading promotes continuous buds", "Feed every 3 weeks in summer"],
        listUrdu: ["سوکھے پھول توڑتے رہیں تاکہ نئی کلیاں بنیں", "گرمیوں میں ہر 3 ہفتے بعد کھاد دیں"]
      }
    }
  },
  {
    id: "rose",
    name: "Rose",
    nameUrdu: "گلاب",
    scientificName: "Rosa rubiginosa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD6pU4YtI7ZEpQJjDd0d6LohElzN_Iv7Gzky7agkfqosThTMcd3EQPmMMlG0qp3HtKsdklktIxZ7P4mO0fWqWLiA-RS0OrSQsHHZyTZ0SNz_ESiOREURs3aXvt46BYVrWrGskylkoLzJ4jjeDCbcorIBm3BExVXtvTv0f6_kO30A14UG7f3NlU1Ar3_NpJLw_U_TSUDI5hqobePcewimq7ezLq3UYNkMdc1RaVHqrhg2Jymei_e1R4RMbrfCGNw-AFL-FWQBXmrp4",
    category: "flowering",
    status: "Blooming",
    statusUrdu: "کھلا ہوا",
    health: "Needs care",
    healthUrdu: "توجہ درکار ہے",
    waterFrequency: "3 Days",
    waterFrequencyUrdu: "3 دن",
    lastWatered: "Last watered 3 days ago",
    lastWateredUrdu: "آخری بار 3 دن پہلے پانی دیا گیا",
    recommendedWaterLeft: "Due: Now",
    recommendedWaterLeftUrdu: "ابھی پانی دینا ہے",
    sunlight: "Full Sun",
    sunlightUrdu: "مکمل دھوپ",
    nextFertilize: "Today (Nitrogen mix)",
    nextFertilizeUrdu: "آج (نائٹروجن کھاد)",
    age: "Flowering • 8 months old",
    ageUrdu: "پھول دار • 8 ماہ پرانا",
    careGuide: {
      overview: {
        text: "Classic red garden roses add timeless elegance and velvet petals to any courtyard. Requires regular pruning and attentive feeding.",
        textUrdu: "کلاسک سرخ گلاب آپ کے صحن اور باغ میں لازوال خوبصورتی اور مخملی پتیاں شامل کرتا ہے۔ اس کے لئے باقاعدہ کٹائی اور کھاد ضروری ہے۔",
        list: ["Regular deadheading keeps blooms coming", "Watch out for aphids and black spot"],
        listUrdu: ["سوکھے پھول توڑنے سے نئے پھول آتے ہیں", "تیلے اور سیاہ دھبوں کی بیماری سے ہوشیار رہیں"]
      },
      watering: {
        text: "Water deeply at the base early in the morning. Never leave water standing on leaves overnight.",
        textUrdu: "صبح سویرے پودے کی جڑ میں گہرا پانی دیں۔ رات کے وقت پتوں پر پانی نہ چھوڑیں۔",
        list: ["2-3 times weekly depending on heat", "Deep root watering is best"],
        listUrdu: ["گرمی کے لحاظ سے ہفتے میں 2 سے 3 بار", "جڑوں تک گہرا پانی دینا بہترین ہے"]
      },
      sunlight: {
        text: "At least 6 hours of morning sunlight. Afternoon shade helps blossoms last longer in hot summers.",
        textUrdu: "کم از کم 6 گھنٹے کی صبح کی دھوپ۔ دوپہر کا سایہ شدید گرمی میں پھولوں کو زیادہ دیر تک تروتازہ رکھتا ہے۔",
        list: ["Loves airy, open spaces", "Ensure good air circulation between bushes"],
        listUrdu: ["ہوا دار، کھلی جگہیں پسند کرتا ہے", "پودوں کے درمیان ہوا کے گزر کو یقینی بنائیں"]
      },
      soil: {
        text: "Loamy soil enriched with well-rotted horse manure or organic rose compost.",
        textUrdu: "نرم چکنی مٹی جس میں پرانی گوبر کی کھاد یا گلاب کی خصوصی کمپوسٹ شامل ہو۔",
        list: ["Add wood ash for stronger stems", "Keep pH slightly acidic around 6.5"],
        listUrdu: ["مضبوط ٹہنیوں کے لئے لکڑی کی راکھ شامل کریں", "pH کو 6.5 کے قریب رکھیں"]
      },
      fertilizer: {
        text: "Specialized rose fertilizer with nitrogen and iron every 4 weeks during bloom cycles.",
        textUrdu: "پھول کھلنے کے دوران ہر 4 ہفتے بعد نائٹروجن اور آئرن والی خصوصی گلاب کھاد دیں۔",
        list: ["Epsom salt spray promotes deeper color", "Stop feeding 6 weeks before winter"],
        listUrdu: ["ایپسم سالٹ کا اسپرے پھولوں کا رنگ گہرا کرتا ہے", "سردیوں سے 6 ہفتے پہلے کھاد روک دیں"]
      }
    }
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    nameUrdu: "گوارپٹھا",
    scientificName: "Aloe barbadensis miller",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgYg-ev0ZU4Wnxv1Cl4VwDhVsrnQQAVczrBppnzDQeTvO-PMH8JtbgkSIas4pSkuArleKxDnvNabAXoxRwcuLhu4CGKaJW39wRhZ_bEjSJKAocZYA3vXGIavgqvSBJ9eYcMs-DmSFRmzNHV3WJFnHs6gfvtf7urMhf6FdtMCZzmoQWY8AS56MeVOHMkgZhFh5jTAKxnAHCNsDRewN9AL6mLxeg8S1Uv_kO_9MMYhH8JYxoYsjiS5Q5jrK4LWFYfPKYVf13xIdlEyI",
    category: "indoor",
    status: "Healthy",
    statusUrdu: "صحت مند",
    health: "Thriving",
    healthUrdu: "بہترین",
    waterFrequency: "14 Days",
    waterFrequencyUrdu: "14 دن",
    lastWatered: "Last watered 10 days ago",
    lastWateredUrdu: "آخری بار 10 دن پہلے پانی دیا گیا",
    recommendedWaterLeft: "Recommended: 4 days left",
    recommendedWaterLeftUrdu: "تجویز کردہ: 4 دن باقی ہیں",
    sunlight: "Indirect Sun",
    sunlightUrdu: "بالواسطہ دھوپ",
    nextFertilize: "Next month",
    nextFertilizeUrdu: "اگلے مہینے",
    age: "Succulent • 1.5 years old",
    ageUrdu: "سدا بہار • 1.5 سال پرانا",
    careGuide: {
      overview: {
        text: "Aloe Vera is a miraculous medicinal succulent storing soothing gel within its thick, architectural leaves. Highly adaptable indoor companion.",
        textUrdu: "گوارپٹھا (ایلوویرا) ایک جادوئی طبی پودا ہے جس کے موٹے پتوں میں سکون بخش جیل محفوظ ہوتا ہے۔ کمرے میں رکھنے کے لئے بہترین ساتھی ہے۔",
        list: ["Air purifying plant", "Gel treats burns and skin irritations"],
        listUrdu: ["ہوا کو صاف کرنے والا پودا", "جیل جلنے اور جلد کی بیماریوں میں مفید ہے"]
      },
      watering: {
        text: "Water sparingly! Allow soil to dry out completely between waterings. Overwatering is the #1 enemy.",
        textUrdu: "پانی بہت کم دیں! پانی دینے کے درمیانی وقفے میں مٹی کو مکمل خشک ہونے دیں۔ زیادہ پانی دینا اس کا سب سے بڑا دشمن ہے۔",
        list: ["Water once every 2-3 weeks", "Reduce to once a month in winter"],
        listUrdu: ["ہر 2 سے 3 ہفتے میں ایک بار پانی دیں", "سردیوں میں مہینے میں صرف ایک بار پانی دیں"]
      },
      sunlight: {
        text: "Bright, indirect sunlight or artificial indoor lights. Direct harsh midday sun can turn leaves reddish-brown.",
        textUrdu: "روشن، بالواسطہ دھوپ یا کمرے کی روشنی۔ دوپہر کی تیز براہ راست دھوپ پتوں کا رنگ بھورا کر سکتی ہے۔",
        list: ["Perfect for sunny kitchen windowsills", "Rotate occasionally for even growth"],
        listUrdu: ["کچن کی روشن کھڑکی کے لئے بہترین", "متوازن نشوونما کے لئے وقتاً فوقتاً گھمائیں"]
      },
      soil: {
        text: "Cactus and succulent potting mix with coarse sand, pumice, or perlite for fast drainage.",
        textUrdu: "کیکٹس اور سکولینٹ مٹی جس میں موٹی ریت، پومیس یا پرلائٹ شامل ہو تاکہ پانی فوراً نکل جائے۔",
        list: ["Must have drainage holes in pot", "Never let pot sit in standing water"],
        listUrdu: ["گملے کے نیچے سوراخ ہونا لازمی ہے", "گملے کے نیچے پانی کھڑا نہ ہونے دیں"]
      },
      fertilizer: {
        text: "Needs minimal feeding. Apply half-strength succulent fertilizer just once in spring.",
        textUrdu: "کھاد کی بہت کم ضرورت ہوتی ہے۔ بہار کے موسم میں صرف ایک بار ہلکی سکولینٹ کھاد دیں۔",
        list: ["Avoid over-fertilizing", "Produces baby pup offsets when happy"],
        listUrdu: ["زیادہ کھاد دینے سے گریز کریں", "خوش ہونے پر جڑ سے نئے چھوٹے پودے نکالتا ہے"]
      }
    }
  },
  {
    id: "chrysanthemum",
    name: "Chrysanthemum",
    nameUrdu: "گل داودی",
    scientificName: "Chrysanthemum morifolium",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7sRy1ka4Ux7dc07CK01p12otzfmm2LiHoqle6YaixGotg6HllgSGFC8uIYRexGCKTA8BnXFHtcDR4UT8vycCrU4_ri_JoxNpfhL6gnLep1FrJfNlWzuX7gEgpsSk2C1KSBYi-FSzSi0-ldJ12TgXqcm0NBhQEDPPiwVLxT7XyU9BKITPu7JjVK-iGcUHHfUEPOJAjW7_GdQDbQSioDlp89SbDwDqRMholE8jpdEWodw3Kv24pYM0JKMoHaC1IkQcqxMaWq_nTLV8",
    category: "outdoor",
    status: "Needs Care",
    statusUrdu: "توجہ درکار",
    health: "Attention Needed",
    healthUrdu: "توجہ کی ضرورت ہے",
    waterFrequency: "3 Days",
    waterFrequencyUrdu: "3 دن",
    lastWatered: "Last watered 4 days ago",
    lastWateredUrdu: "آخری بار 4 دن پہلے پانی دیا گیا",
    recommendedWaterLeft: "Overdue by 1 day!",
    recommendedWaterLeftUrdu: "1 دن تاخیر کا شکار!",
    sunlight: "Bright Sun",
    sunlightUrdu: "تیز دھوپ",
    nextFertilize: "In 2 days",
    nextFertilizeUrdu: "2 دنوں میں",
    age: "Budding • 5 months old",
    ageUrdu: "کلیوں والا • 5 ماہ پرانا",
    careGuide: {
      overview: {
        text: "Chrysanthemums (Gul-e-Dawoodi) bring spectacular bursts of golden, amber, and purple blossoms to autumn gardens.",
        textUrdu: "گل داودی خزاں کے باغ میں سنہری، عنبر اور جامنی پھولوں کی شاندار بہار لاتا ہے۔",
        list: ["Pinch shoot tips early in season for bushier plants", "Beloved winter garden favorite"],
        listUrdu: ["گھنا بنانے کے لئے موسم کے شروع میں شاخوں کے سرے کاٹیں", "سردیوں کے باغ کا پسندیدہ پھول"]
      },
      watering: {
        text: "Requires even moisture during budding. Shallow root systems dry out quickly in breezy weather.",
        textUrdu: "کلیاں بننے کے دوران یکساں نمی کی ضرورت ہوتی ہے۔ ہوا دار موسم میں اس کی اتھلی جڑیں جلدی خشک ہو جاتی ہیں۔",
        list: ["Water when top inch feels dry", "Keep foliage dry to prevent rust fungus"],
        listUrdu: ["جب اوپر کی ایک انچ مٹی خشک محسوس ہو تو پانی دیں", "پتوں کو خشک رکھیں تاکہ فنگس نہ لگے"]
      },
      sunlight: {
        text: "Needs full sun (at least 6 hours) to form tight, numerous flower heads.",
        textUrdu: "مضبوط اور بے شمار پھولوں کے لئے مکمل دھوپ (کم از کم 6 گھنٹے) درکار ہوتی ہے۔",
        list: ["South or west-facing garden beds", "Photoperiod sensitive (blooms when days shorten)"],
        listUrdu: ["جنوب یا مغرب کا رخ کرنے والی کیاریاں", "دن چھوٹے ہونے پر پھول کھلتے ہیں"]
      },
      soil: {
        text: "Humus-rich, fertile, well-draining garden soil mixed with leaf mold.",
        textUrdu: "پتوں کی کھاد سے بھرپور زرخیز اور اچھی نکاسی والی باغ کی مٹی۔",
        list: ["Add perlite for container growing", "Mulch base to protect shallow roots"],
        listUrdu: ["گملے میں لگانے کے لئے پرلائٹ شامل کریں", "اتھلی جڑوں کی حفاظت کے لئے کھاد کی تہہ بچھائیں"]
      },
      fertilizer: {
        text: "Feed every 2 weeks with balanced flower fertilizer until buds show color, then discontinue feeding.",
        textUrdu: "جب تک کلیاں رنگ نہ دکھائیں ہر 2 ہفتے بعد متوازن کھاد دیں، اس کے بعد کھاد بند کر دیں۔",
        list: ["High-potassium formula enhances flower longevity", "Stake tall varieties for support"],
        listUrdu: ["پوٹاشیم سے بھرپور کھاد پھولوں کی عمر بڑھاتی ہے", "لمبی اقسام کو سہارے کے لئے لکڑی لگائیں"]
      }
    }
  },
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    nameUrdu: "مونسٹیرا",
    scientificName: "Monstera deliciosa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTNCppHvoifsEWhbZ_nzvIKChnafToB3Xh3cCprx--NJaGENTrsZTQZQVn9UlZVWe8HBfb2bC6GqP1gkl8duD6vJTdk3Y3AGl7XSABLsnhUliEl5dxH3fa1c8W0jddTkcewz3zfO37ntwrC9MEnWtxYdayYTTys-w1hU8CmnfW5Pc411dD7bva3RcZ3Ycf25ZWOt9u_a7ZemCgJPvSGzEDDupbQa2X3RnEeJFPBNxcpJi5e-YBHTit6NZSWoTbwlMq0hP_Sp8VCxU",
    category: "indoor",
    status: "Healthy",
    statusUrdu: "صحت مند",
    health: "Lush & Fenestrated",
    healthUrdu: "گھنا اور شاندار",
    waterFrequency: "7 Days",
    waterFrequencyUrdu: "7 دن",
    lastWatered: "Last watered 5 days ago",
    lastWateredUrdu: "آخری بار 5 دن پہلے پانی دیا گیا",
    recommendedWaterLeft: "Recommended: 2 days left",
    recommendedWaterLeftUrdu: "تجویز کردہ: 2 دن باقی ہیں",
    sunlight: "Bright Indirect",
    sunlightUrdu: "روشن بالواسطہ",
    nextFertilize: "Friday",
    nextFertilizeUrdu: "جمعہ",
    age: "Tropical • 3 years old",
    ageUrdu: "استوائی • 3 سال پرانا",
    careGuide: {
      overview: {
        text: "The Swiss Cheese Plant is famous for its iconic fenestrated leaves. Native to tropical rainforests, it loves humidity and climbing moss poles.",
        textUrdu: "اپنی سوئس چیز جیسی خوبصورت پتیوں کی وجہ سے مشہور، یہ پودا استوائی جنگلات سے تعلق رکھتا ہے اور نمی و موس پول کو پسند کرتا ہے۔",
        list: ["Wipe leaves with damp cloth to keep glossy", "Provide a moss pole for climbing support"],
        listUrdu: ["چمک برقرار رکھنے کے لئے پتوں کو گیلے کپڑے سے صاف کریں", "چڑھنے کے لئے موس پول کا سہارا دیں"]
      },
      watering: {
        text: "Water when the top 2-3 inches of potting mix feel dry. Do not let it sit in saturated soil.",
        textUrdu: "جب مٹی کی اوپر والی 2 سے 3 انچ تہہ خشک محسوس ہو تو پانی دیں۔ مٹی میں پانی کھڑا نہ ہونے دیں۔",
        list: ["Loves ambient humidity (50%+)", "Empty saucer after thorough watering"],
        listUrdu: ["ہوا میں نمی (50 فیصد سے زیادہ) پسند ہے", "پانی دینے کے بعد نیچے والی پلیٹ خالی کر دیں"]
      },
      sunlight: {
        text: "Bright indirect light promotes larger leaves with more splits. Can tolerate lower light but will grow slower.",
        textUrdu: "روشن بالواسطہ روشنی میں پتے بڑے اور زیادہ کٹاؤ والے ہوتے ہیں۔ کم روشنی بھی برداشت کرتا ہے لیکن نشوونما آہستہ ہوتی ہے۔",
        list: ["Keep away from direct afternoon sun", "Ideal near east or north windows"],
        listUrdu: ["دوپہر کی تیز دھوپ سے دور رکھیں", "مشرق یا شمال کی کھڑکیوں کے پاس بہترین"]
      },
      soil: {
        text: "Chunky, aerated aroid mix with orchid bark, perlite, peat moss, and charcoal.",
        textUrdu: "موٹی اور ہوا دار مٹی جس میں آرکڈ کی چھال، پرلائٹ، پیٹ موس اور کوئلہ شامل ہو۔",
        list: ["Air roots love porous soil", "Repot when roots emerge from bottom drainage"],
        listUrdu: ["ہوائی جڑیں نرم مٹی پسند کرتی ہیں", "جب جڑیں نیچے سے باہر آنے لگیں تو گملہ تبدیل کریں"]
      },
      fertilizer: {
        text: "Balanced liquid houseplant fertilizer diluted to half strength every month during spring and summer.",
        textUrdu: "بہار اور گرمیوں میں ہر مہینے متوازن مائع کھاد پانی میں ملا کر دیں۔",
        list: ["No fertilizer needed in winter", "Encourages larger leaf splits"],
        listUrdu: ["سردیوں میں کھاد کی ضرورت نہیں", "بڑے اور خوبصورت پتوں کی نشوونما میں مدد کرتا ہے"]
      }
    }
  }
];

export const INITIAL_REMINDERS: Reminder[] = [
  {
    id: "rem-1",
    plantId: "mango",
    plantName: "Water Mango",
    plantNameUrdu: "آم کو پانی دیں",
    action: "Water Mango",
    actionUrdu: "آم کو پانی دیں",
    amount: "250ml filtered",
    amountUrdu: "250 ملی لیٹر فلٹر شدہ",
    time: "Due: Now",
    timeUrdu: "ابھی دینا ہے",
    dueStatus: "Due: Now",
    dueStatusUrdu: "ابھی دینا ہے",
    type: "water"
  },
  {
    id: "rem-2",
    plantId: "rose",
    plantName: "Fertilize Rose",
    plantNameUrdu: "گلاب کو کھاد دیں",
    action: "Fertilize Rose",
    actionUrdu: "گلاب کو کھاد دیں",
    amount: "Nitrogen rich mix",
    amountUrdu: "نائٹروجن سے بھرپور مکس",
    time: "2:00 PM",
    timeUrdu: "دوپہر 2:00 بجے",
    dueStatus: "2:00 PM",
    dueStatusUrdu: "دوپہر 2:00 بجے",
    type: "fertilize"
  },
  {
    id: "rem-3",
    plantId: "aloe-vera",
    plantName: "Check Aloe Moisture",
    plantNameUrdu: "گوارپٹھا کی نمی چیک کریں",
    action: "Check Aloe Moisture",
    actionUrdu: "گوارپٹھا کی نمی چیک کریں",
    amount: "Moisture meter check",
    amountUrdu: "نمی میٹر سے معائنہ",
    time: "5:00 PM",
    timeUrdu: "شام 5:00 بجے",
    dueStatus: "5:00 PM",
    dueStatusUrdu: "شام 5:00 بجے",
    type: "check"
  }
];

export const INITIAL_TASKS: GardenTask[] = [
  {
    id: "task-1",
    title: "Water Lemon",
    titleUrdu: "لیموں کو پانی دیں",
    time: "8:00 AM",
    timeUrdu: "صبح 8:00 بجے",
    type: "water",
    completed: false,
    icon: "water_drop",
    iconBg: "bg-[#90d792]",
    iconColor: "text-[#002107]"
  },
  {
    id: "task-2",
    title: "Repot Aloe",
    titleUrdu: "گوارپٹھا کا گملہ تبدیل کریں",
    time: "11:00 AM",
    timeUrdu: "صبح 11:00 بجے",
    type: "repot",
    completed: false,
    icon: "potted_plant",
    iconBg: "bg-[#ffba38]",
    iconColor: "text-[#281900]"
  },
  {
    id: "task-3",
    title: "Check Shade Tree",
    titleUrdu: "سایہ دار درخت چیک کریں",
    time: "4:00 PM",
    timeUrdu: "شام 4:00 بجے",
    type: "check",
    completed: false,
    icon: "eco",
    iconBg: "bg-[#a3f69c]",
    iconColor: "text-[#002204]",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzVPT_z5gHkGz_AvX5HPlNhohBzTJLaa7Om1jokCgX36HdX_0Nl8-fPNmapij3vjgNE5Vnej9kbB9NP9fmqC-jSW647qaSqMaXEupmNJsGbIYD39KVASTJiz0Fj20FVOWOM0JeAK96gtkDDZkYlTF7-a52V9Elm_FUApa2mLM5cyvvaRp0NvcM3n0RFazSZCNI6WvhKurDEC89ZW0zyzPHQpSH4mxuUgB882-9CE3wGAQza84cMDZpK8oqhslX9VGTDezhWNHTlXk"
  }
];
