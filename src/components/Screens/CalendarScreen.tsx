import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { GardenTask } from '../../types';

export const CalendarScreen: React.FC = () => {
  const { tasks, toggleTask, addTask, language, t } = useApp();
  const now = new Date();
  const [currentYear, setCurrentYear] = useState<number>(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(now.getMonth()); // 0-11
  const [selectedDay, setSelectedDay] = useState<number>(now.getDate());
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskTime, setNewTaskTime] = useState<string>('2:00 PM');
  const [newTaskType, setNewTaskType] = useState<GardenTask['type']>('water');

  // Days of the week in English and Urdu
  const weekDaysEn = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const weekDaysUr = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];

  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthsUr = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'];

  const currentMonthName = language === 'ur' ? `${monthsUr[currentMonth]} ${currentYear}` : `${monthsEn[currentMonth]} ${currentYear}`;
  const selectedDateFormatted = language === 'ur' ? `${monthsUr[currentMonth]} ${selectedDay}, ${currentYear}` : `${monthsEn[currentMonth].slice(0, 3)} ${selectedDay}, ${currentYear}`;

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
    setSelectedDay(today.getDate());
  };

  const getDaysGrid = () => {
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sunday
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const grid = [];

    // Previous month trailing days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      grid.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        dot: undefined
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      let dot: string | undefined = undefined;
      if (d % 6 === 0) dot = '#926500';
      else if (d % 4 === 0) dot = '#88d982';
      else if (d === 15 || d === 20 || d === 25) dot = '#286b33';

      grid.push({
        day: d,
        isCurrentMonth: true,
        dot
      });
    }

    // Next month leading days to fill up grid slots
    const totalSlots = grid.length > 35 ? 42 : 35;
    const remaining = totalSlots - grid.length;
    for (let i = 1; i <= remaining; i++) {
      grid.push({
        day: i,
        isCurrentMonth: false,
        dot: undefined
      });
    }

    return grid;
  };

  const daysGrid = getDaysGrid();

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    let iconBg = "bg-[#90d792]";
    let iconColor = "text-[#002107]";
    let icon = "water_drop";

    if (newTaskType === 'repot') {
      iconBg = "bg-[#ffba38]"; iconColor = "text-[#281900]"; icon = "potted_plant";
    } else if (newTaskType === 'check') {
      iconBg = "bg-[#a3f69c]"; iconColor = "text-[#002204]"; icon = "eco";
    } else if (newTaskType === 'harvest') {
      iconBg = "bg-[#926500]"; iconColor = "text-[#ffffff]"; icon = "agriculture";
    }

    addTask({
      title: newTaskTitle,
      titleUrdu: newTaskTitle,
      time: newTaskTime,
      timeUrdu: newTaskTime,
      type: newTaskType,
      icon,
      iconBg,
      iconColor
    });

    setNewTaskTitle('');
    setIsTaskModalOpen(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Bento Style Calendar Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Calendar Card */}
        <div className="md:col-span-8 bg-[#eff6e7] dark:bg-[#2c3228] rounded-[28px] p-6 shadow-sm border border-[#bfcaba]/30">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#171d14] dark:text-[#ecf3e4]">
              {currentMonthName}
            </h2>
            <div className="flex items-center gap-1.5">
              <button
                onClick={goToToday}
                className="px-3 py-1 rounded-full border border-[#707a6c]/30 text-xs font-semibold text-[#0d631b] dark:text-[#a3f69c] hover:bg-[#dee5d6]/50 dark:hover:bg-[#40493d]/40 transition-colors mr-1"
              >
                {language === 'ur' ? 'آج' : 'Today'}
              </button>
              <button 
                onClick={prevMonth}
                className="p-2 hover:bg-[#dee5d6] dark:hover:bg-[#40493d]/40 rounded-full transition-colors flex items-center justify-center text-[#171d14] dark:text-[#ecf3e4]"
                title="Previous Month"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 hover:bg-[#dee5d6] dark:hover:bg-[#40493d]/40 rounded-full transition-colors flex items-center justify-center text-[#171d14] dark:text-[#ecf3e4]"
                title="Next Month"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-bold text-[#40493d] dark:text-[#bfcaba] mb-4">
            {(language === 'ur' ? weekDaysUr : weekDaysEn).map((d, i) => (
              <div key={i} className="py-1">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-3.5 text-center font-medium">
            {daysGrid.map((item, idx) => {
              const isSelected = item.isCurrentMonth && item.day === selectedDay;
              const isToday = item.isCurrentMonth && item.day === now.getDate() && currentMonth === now.getMonth() && currentYear === now.getFullYear();
              return (
                <div 
                  key={idx} 
                  onClick={() => {
                    if (item.isCurrentMonth) {
                      setSelectedDay(item.day);
                    }
                  }}
                  className={`h-10 flex flex-col items-center justify-center relative cursor-pointer rounded-full transition-all ${
                    !item.isCurrentMonth 
                      ? 'text-[#707a6c]/30 cursor-default' 
                      : isSelected 
                      ? 'bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] font-bold shadow-md scale-110' 
                      : isToday
                      ? 'border-2 border-[#0d631b] dark:border-[#a3f69c] text-[#0d631b] dark:text-[#a3f69c] font-bold'
                      : 'text-[#171d14] dark:text-[#ecf3e4] hover:bg-[#dee5d6]/50 dark:hover:bg-[#40493d]/30'
                  }`}
                >
                  <span>{item.day}</span>
                  {item.dot && !isSelected && (
                    <span 
                      className="absolute bottom-1 w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: item.dot }} 
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats/Mood Side Bento */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-[#abf4ac] dark:bg-[#286b33] rounded-[28px] p-6 flex-1 relative overflow-hidden group shadow-sm">
            <div className="relative z-10">
              <span className="text-xs font-bold text-[#2e7238] dark:text-[#ffffff] uppercase tracking-wider">
                {t('gardenHealth')}
              </span>
              <div className="text-5xl font-bold text-[#002107] dark:text-[#ffffff] mt-2">84%</div>
              <p className="text-sm text-[#002107]/80 dark:text-[#ffffff]/90 mt-1">
                {t('excellentGrowth')}
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">eco</span>
            </div>
          </div>

          <div className="bg-[#926500] dark:bg-[#ffba38] rounded-[28px] p-6 relative overflow-hidden shadow-sm text-white dark:text-[#281900]">
            <span className="text-xs font-bold uppercase tracking-wider opacity-80">
              {t('nextHarvest')}
            </span>
            <div className="text-xl font-bold mt-2">{t('cherryTomatoes')}</div>
            <p className="text-sm opacity-90 mt-1">{t('in12Days')}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4] flex items-center gap-2">
            <span>{t('todaysTimeline')}</span>
            <span className="px-3 py-0.5 bg-[#dee5d6] dark:bg-[#2c3228] rounded-full text-xs font-bold text-[#40493d] dark:text-[#bfcaba]">
              {language === 'ur' ? `${tasks.length} کام` : `${tasks.length} Tasks`}
            </span>
          </h2>
          <span className="text-xs font-semibold text-[#0d631b] dark:text-[#a3f69c] bg-[#eff6e7] dark:bg-[#2c3228] px-3.5 py-1.5 rounded-full border border-[#bfcaba]/30">
            {selectedDateFormatted}
          </span>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {tasks.map((task, idx) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => toggleTask(task.id)}
                className={`bg-[#f5fced] dark:bg-[#2c3228] rounded-[28px] p-5 flex items-center gap-4 transition-all hover:bg-[#eff6e7] dark:hover:bg-[#2c3228]/80 group cursor-pointer border shadow-sm ${
                  task.completed 
                    ? 'opacity-60 border-[#0d631b]/30 bg-[#eff6e7]/50' 
                    : 'border-[#bfcaba]/30 hover:border-[#0d631b]/40'
                }`}
              >
                <div className={`w-14 h-14 ${task.iconBg} organic-mask flex items-center justify-center shrink-0 shadow-inner ${task.image ? 'p-0 overflow-hidden' : ''}`}>
                  {task.image ? (
                    <img src={task.image} alt={task.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className={`material-symbols-outlined ${task.iconColor} text-3xl fill-icon`}>
                      {task.icon}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className={`font-bold text-base md:text-lg text-[#171d14] dark:text-[#ecf3e4] transition-all truncate ${
                    task.completed ? 'line-through text-[#40493d]' : ''
                  }`}>
                    {language === 'ur' ? task.titleUrdu : task.title}
                  </h3>
                  <p className="text-xs text-[#40493d] dark:text-[#bfcaba] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    <span>{language === 'ur' ? task.timeUrdu : task.time}</span>
                  </p>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12 cursor-pointer shrink-0">
                  <div className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center shadow-sm ${
                    task.completed
                      ? 'bg-[#0d631b] dark:bg-[#a3f69c] border-[#0d631b] dark:border-[#a3f69c]'
                      : 'border-[#707a6c]/60 group-hover:border-[#0d631b]'
                  }`}>
                    <span className={`material-symbols-outlined text-white dark:text-[#002204] text-lg font-bold transition-opacity ${
                      task.completed ? 'opacity-100' : 'opacity-0'
                    }`}>
                      check
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <button 
          onClick={() => setIsTaskModalOpen(true)}
          className="bg-[#2e7d32] text-[#cbffc2] hover:bg-[#0d631b] h-14 md:h-16 px-6 rounded-[28px] shadow-xl hover:shadow-2xl flex items-center gap-2.5 active:scale-95 transition-all hover:brightness-110"
        >
          <span className="material-symbols-outlined fill-icon text-2xl">add</span>
          <span className="font-bold text-sm tracking-wide">{t('addTask')}</span>
        </button>
      </div>

      {/* Add Task Modal */}
      <AnimatePresence>
        {isTaskModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsTaskModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f5fced] dark:bg-[#1a1c19] rounded-[32px] p-6 md:p-8 max-w-md w-full shadow-2xl border border-[#707a6c]/20"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#171d14] dark:text-[#ecf3e4]">
                  {language === 'ur' ? 'نیا کام شامل کریں' : 'Add New Task'}
                </h3>
                <button 
                  onClick={() => setIsTaskModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#dee5d6]/50 dark:bg-[#2c3228] flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleCreateTask} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#40493d] dark:text-[#bfcaba] uppercase mb-1">
                    {language === 'ur' ? 'کام کا عنوان' : 'Task Title'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'ur' ? "مثلاً: لیموں کو پانی دیں" : "e.g., Prune Jasmine branches"}
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#eff6e7] dark:bg-[#2c3228] border border-[#bfcaba]/50 dark:border-[#707a6c]/40 text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:ring-2 focus:ring-[#0d631b] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#40493d] dark:text-[#bfcaba] uppercase mb-1">
                    {language === 'ur' ? 'وقت' : 'Time'}
                  </label>
                  <select
                    value={newTaskTime}
                    onChange={(e) => setNewTaskTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#eff6e7] dark:bg-[#2c3228] border border-[#bfcaba]/50 dark:border-[#707a6c]/40 text-[#171d14] dark:text-[#ecf3e4] focus:outline-none focus:ring-2 focus:ring-[#0d631b] text-sm"
                  >
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#40493d] dark:text-[#bfcaba] uppercase mb-1">
                    {language === 'ur' ? 'کام کی قسم' : 'Task Category'}
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setNewTaskType('water')}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        newTaskType === 'water' ? 'bg-[#abf4ac] text-[#002107] border-[#0d631b]' : 'border-[#bfcaba]/40 text-[#40493d] dark:text-[#bfcaba]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">water_drop</span>
                      <span>{language === 'ur' ? 'آبپاشی' : 'Watering'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewTaskType('repot')}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        newTaskType === 'repot' ? 'bg-[#ffba38] text-[#281900] border-[#926500]' : 'border-[#bfcaba]/40 text-[#40493d] dark:text-[#bfcaba]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">potted_plant</span>
                      <span>{language === 'ur' ? 'گملہ تبدیلی' : 'Repotting'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewTaskType('check')}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        newTaskType === 'check' ? 'bg-[#a3f69c] text-[#002204] border-[#0d631b]' : 'border-[#bfcaba]/40 text-[#40493d] dark:text-[#bfcaba]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">eco</span>
                      <span>{language === 'ur' ? 'معائنہ' : 'Inspection'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewTaskType('harvest')}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center gap-2 transition-all ${
                        newTaskType === 'harvest' ? 'bg-[#926500] text-white border-[#926500]' : 'border-[#bfcaba]/40 text-[#40493d] dark:text-[#bfcaba]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">agriculture</span>
                      <span>{language === 'ur' ? 'کٹائی' : 'Harvest'}</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsTaskModalOpen(false)}
                    className="flex-1 py-3.5 rounded-full border border-[#bfcaba] font-bold text-sm text-[#40493d] dark:text-[#bfcaba] hover:bg-[#dee5d6]/40"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-full bg-[#0d631b] dark:bg-[#a3f69c] text-white dark:text-[#002204] font-bold text-sm shadow-lg hover:brightness-110"
                  >
                    {t('save')}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
