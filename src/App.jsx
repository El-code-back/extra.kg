import { useState } from 'react'
import { 
  Check, 
  ShieldCheck, 
  Clock, 
  Users, 
  Star, 
  MessageSquare, 
  ArrowRight, 
  X, 
  Smartphone, 
  DollarSign, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  Menu,
  Lock,
  Zap,
  HelpCircle,
  Percent,
  TrendingUp
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [calcModalOpen, setCalcModalOpen] = useState(false)
  
  // ROI Calculator State
  const [avgCheck, setAvgCheck] = useState(15000)
  const [traffic, setTraffic] = useState(5000)
  const [conversion, setConversion] = useState(3)
  
  // Interactive Admin Mock State
  const [siteTitle, setSiteTitle] = useState('Аренда Спецтехники в Бишкеке')
  const [sitePhone, setSitePhone] = useState('+996 (555) 12-34-56')
  const [isAdminPreviewActive, setIsAdminPreviewActive] = useState(false)

  // Booking Form State
  const [formData, setFormData] = useState({ name: '', phone: '', agree: true })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const calculatedLeads = Math.round(traffic * (conversion / 100))
  const calculatedRevenue = Math.round(calculatedLeads * avgCheck)

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
      setFormData({ name: '', phone: '', agree: true })
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#060b18] text-[#f8fafc] font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-slate-800/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#060b18]/80 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="font-serif-elegant font-bold text-xl text-white">S</span>
            </div>
            <div>
              <span className="font-serif-elegant text-2xl font-bold tracking-tight text-white block">STITCH</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] block -mt-1 font-semibold">Digital Studio</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#guarantees" className="text-sm font-medium text-slate-300 hover:text-white transition">Гарантии</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition">Услуги</a>
            <a href="#admin-demo" className="text-sm font-medium text-slate-300 hover:text-white transition">Управление</a>
            <a href="#team" className="text-sm font-medium text-slate-300 hover:text-white transition">Команда</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition">Отзывы</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/996555123456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white px-4 py-2 border border-slate-800 hover:border-slate-700 rounded-full transition duration-300"
            >
              WhatsApp
            </a>
            <button 
              onClick={() => setCalcModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-1.5 active:scale-95"
            >
              Калькулятор ROI
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-[#060b18]/90 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#0b132b] p-6 shadow-xl border-l border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif-elegant text-2xl font-bold text-white">STITCH</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                <a href="#guarantees" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-300 hover:text-white">Гарантии</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-300 hover:text-white">Услуги</a>
                <a href="#admin-demo" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-300 hover:text-white">Управление</a>
                <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-300 hover:text-white">Команда</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-300 hover:text-white">Отзывы</a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/996555123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-slate-800 text-slate-300 hover:text-white rounded-full font-medium"
              >
                Написать в WhatsApp
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); setCalcModalOpen(true); }}
                className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/20"
              >
                Рассчитать окупаемость
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Индивидуальная разработка в Бишкеке</span>
            </div>
            
            <h1 className="font-serif-elegant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Сайт без заявок <span className="text-slate-400 italic font-normal">сливает бюджет?</span> <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent">
                Создадим окупаемую систему продаж.
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Мы не пишем код ради кода, а разрабатываем веб-проекты с фиксированной юридической гарантией сроков. Вы получаете инструмент, который генерирует <span className="text-white font-semibold underline decoration-blue-500">от 15 до 300 целевых заявок</span> в месяц, с настроенной аналитикой и прозрачной воронкой.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => setCalcModalOpen(true)}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-xl shadow-blue-500/20 transition duration-300 active:scale-95 text-base"
              >
                Рассчитать окупаемость сайта
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#booking"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/50 hover:bg-slate-900 text-white font-medium rounded-full border border-slate-800 hover:border-slate-700 transition duration-300"
              >
                Обсудить проект
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-900">
              <div>
                <p className="font-serif-elegant text-2xl sm:text-3xl font-bold text-white">1%</p>
                <p className="text-xs text-slate-400 mt-1">Штраф за день просрочки</p>
              </div>
              <div>
                <p className="font-serif-elegant text-2xl sm:text-3xl font-bold text-white">x3.5</p>
                <p className="text-xs text-slate-400 mt-1">Средний рост конверсии</p>
              </div>
              <div>
                <p className="font-serif-elegant text-2xl sm:text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Передача всех прав по договору</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Quick Calculator Mock */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-500/10 rounded-2xl filter blur-2xl" />
            <div className="relative bg-[#111a36]/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">stitch_roi_estimator.exe</span>
              </div>

              <div className="space-y-6 pt-6">
                <div className="space-y-2 text-left">
                  <label className="flex justify-between text-xs font-medium text-slate-300">
                    <span>Средний чек продажи (в сомах)</span>
                    <span className="text-blue-400 font-mono font-semibold">{avgCheck.toLocaleString('ru-RU')} сом</span>
                  </label>
                  <input 
                    type="range" 
                    min="1000" 
                    max="150000" 
                    step="1000" 
                    value={avgCheck}
                    onChange={(e) => setAvgCheck(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-slate-900 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="flex justify-between text-xs font-medium text-slate-300">
                    <span>Посетителей в месяц</span>
                    <span className="text-blue-400 font-mono font-semibold">{traffic.toLocaleString('ru-RU')} чел.</span>
                  </label>
                  <input 
                    type="range" 
                    min="500" 
                    max="30000" 
                    step="500" 
                    value={traffic}
                    onChange={(e) => setTraffic(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-slate-900 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="flex justify-between text-xs font-medium text-slate-300">
                    <span>Ожидаемая конверсия сайта</span>
                    <span className="text-blue-400 font-mono font-semibold">{conversion}%</span>
                  </label>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="15" 
                    step="0.5" 
                    value={conversion}
                    onChange={(e) => setConversion(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-slate-900 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                </div>

                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl text-left border border-slate-800/30">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Получим заявок</span>
                    <span className="text-2xl font-serif-elegant font-bold text-white">{calculatedLeads}</span>
                    <span className="text-slate-400 text-xs ml-1">/ мес.</span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl text-left border border-slate-800/30">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">Ценность трафика</span>
                    <span className="text-lg sm:text-xl font-bold text-green-400 block">{calculatedRevenue.toLocaleString('ru-RU')} сом</span>
                  </div>
                </div>

                <button 
                  onClick={() => setCalcModalOpen(true)}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group"
                >
                  Открыть детальный расчёт ROI
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2: AGITATION & TRUST */}
      <section id="guarantees" className="py-20 lg:py-28 bg-[#0b132b] relative border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Боитесь дилетантов и сорванных сроков?
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Мы детально изучили причины разочарований в веб-студиях Бишкека и перестроили наши бизнес-процессы, зафиксировав обязательства юридически.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: 1% penalty */}
            <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700/80 transition duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif-elegant text-xl font-bold text-white mb-3">1% штрафа за каждый день просрочки</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Мы фиксируем дедлайны в официальном договоре. Задержим сдачу проекта хотя бы на сутки — платим мы, а не вы. Никаких бесконечных «ещё неделя».
                </p>
              </div>
              <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-t border-slate-800/80 pt-4 flex items-center justify-between">
                <span>Прописано в договоре</span>
                <span className="text-green-500">✓ Юр. защита</span>
              </div>
            </div>

            {/* Card 2: Conversion growth */}
            <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700/80 transition duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-serif-elegant text-xl font-bold text-white mb-3">В 3.5 раза выше конверсия</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Мы не бросаем вас на этапе «сдачи кода». Проектируем интерфейс на основе поведенческих карт и настраиваем сквозную веб-аналитику с первого дня.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-t border-slate-800/80 pt-4 flex items-center justify-between">
                <span>ROI ориентированность</span>
                <span className="text-green-500">✓ Статистика</span>
              </div>
            </div>

            {/* Card 3: Rights transfer */}
            <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700/80 transition duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif-elegant text-xl font-bold text-white mb-3">100% передача прав</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  После финальной оплаты вы получаете все доступы к домену, хостингу и панели администрирования на ваше юр. лицо. Никакой привязки к серверам студии.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider border-t border-slate-800/80 pt-4 flex items-center justify-between">
                <span>Полный контроль</span>
                <span className="text-green-500">✓ 0% скрытых плат</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3: SERVICES */}
      <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Опасаетесь скрытых платежей?
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Понятные пакеты разработки с фиксированной сметой. Никаких «это не входило в ТЗ» и навязывания лишней технической работы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Service 1: Landing Page */}
          <div className="bg-[#111a36]/40 border border-slate-800 hover:border-blue-500/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif-elegant text-2xl font-bold text-white">Landing Page</h3>
                  <p className="text-xs text-slate-400 mt-1">Для быстрого старта продаж</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 font-mono">Срок: 10-14 дней</span>
              </div>
              
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-left mb-6">
                <span className="text-[10px] font-semibold uppercase text-red-400 block tracking-wider mb-1">Главный страх:</span>
                <p className="text-xs text-slate-300">«Сольем деньги на контекст и рекламу, а сайт окажется пустой визиткой без заявок»</p>
              </div>

              <ul className="space-y-3.5 text-left mb-8">
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Конверсия от 4% до 12% за счёт детального UX-анализа</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Установка счетчиков веб-аналитики (Я.Метрика/GA4)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Настройка целей для отслеживания стоимости лида</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Адаптивность для смартфонов на 100%</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="border-t border-slate-800/80 pt-6 mb-6 text-left">
                <span className="text-xs text-slate-400 block mb-1">Фиксированная стоимость</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-serif-elegant font-bold text-white">от 35 000</span>
                  <span className="text-sm text-slate-400">сом</span>
                </div>
              </div>
              <button 
                onClick={() => setCalcModalOpen(true)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-850 text-slate-200 font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition flex items-center justify-center gap-1.5"
              >
                Рассчитать лид-воронку
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Service 2: Corporate Site */}
          <div className="bg-[#111a36]/80 border-2 border-blue-600 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] relative">
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 rounded-full text-[10px] uppercase font-bold tracking-widest text-white shadow-lg shadow-blue-600/30">
              Популярное решение
            </div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif-elegant text-2xl font-bold text-white">Корпоративный сайт</h3>
                  <p className="text-xs text-slate-400 mt-1">Для позиционирования и доверия</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 font-mono">Срок: 20-30 дней</span>
              </div>
              
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-left mb-6">
                <span className="text-[10px] font-semibold uppercase text-red-400 block tracking-wider mb-1">Главный страх:</span>
                <p className="text-xs text-slate-300">«Сделают кривой многостраничник на самописе, который мы не сможем редактировать сами»</p>
              </div>

              <ul className="space-y-3.5 text-left mb-8">
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="font-semibold text-white">Интуитивно понятная CMS (без сложных панелей)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Детальные видеоинструкции по наполнению для ваших сотрудников</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Базовая SEO-оптимизация (мета-теги, ЧПУ, карта сайта)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Модуль блога, галереи и услуг с удобным управлением</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="border-t border-slate-800/80 pt-6 mb-6 text-left">
                <span className="text-xs text-slate-400 block mb-1">Фиксированная стоимость</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-serif-elegant font-bold text-white">от 65 000</span>
                  <span className="text-sm text-slate-400">сом</span>
                </div>
              </div>
              <a 
                href="#admin-demo"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/20"
              >
                Посмотреть демо админки
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service 3: E-commerce */}
          <div className="bg-[#111a36]/40 border border-slate-800 hover:border-blue-500/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif-elegant text-2xl font-bold text-white">Интернет-магазин</h3>
                  <p className="text-xs text-slate-400 mt-1">Полноценный каталог товаров</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 font-mono">Срок: 30-45 дней</span>
              </div>
              
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-left mb-6">
                <span className="text-[10px] font-semibold uppercase text-red-400 block tracking-wider mb-1">Главный страх:</span>
                <p className="text-xs text-slate-300">«Покупателям будет сложно совершить заказ, оплатить, корзина будет падать, клиенты уйдут»</p>
              </div>

              <ul className="space-y-3.5 text-left mb-8">
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Интеграция систем оплаты (Элкарт, O!Деньги, MBank)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Удобный личный кабинет покупателя и история заказов</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Оптимизация корзины (снижение процента брошенных корзин на 40%)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>Синхронизация с 1С/CRM и выгрузка каталога Excel</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="border-t border-slate-800/80 pt-6 mb-6 text-left">
                <span className="text-xs text-slate-400 block mb-1">Фиксированная стоимость</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-serif-elegant font-bold text-white">от 120 000</span>
                  <span className="text-sm text-slate-400">сом</span>
                </div>
              </div>
              <a 
                href="#booking"
                className="w-full py-3 bg-slate-900 hover:bg-slate-850 text-slate-200 font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition flex items-center justify-center gap-1.5"
              >
                Обсудить интеграцию
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* NEW INTERACTIVE BLOCK: ADMIN DEMO (Вы — хозяин своего сайта) */}
      <section id="admin-demo" className="py-20 lg:py-28 bg-[#0b132b] relative border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">Простота и независимость</span>
              <h2 className="font-serif-elegant text-3xl sm:text-4xl font-bold text-white leading-tight">
                Админка, в которой действительно не страшно
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Мы знаем, как сильно предприниматели боятся получить сайт, которым невозможно управлять без вызова дорогостоящего программиста. 
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-sm text-slate-300">Никакого программирования: редактирование текста кликом мыши.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-sm text-slate-300">Видеоинструкции в комплекте: ваш менеджер разберётся за 5 минут.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-sm text-slate-300">Полный контроль: все доступы к коду остаются у вас.</p>
                </div>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => setIsAdminPreviewActive(!isAdminPreviewActive)} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition duration-200 shadow-md"
                >
                  {isAdminPreviewActive ? 'Сбросить демо' : 'Протестировать демо прямо сейчас'}
                </button>
              </div>
            </div>

            {/* Right side interactive mock */}
            <div className="lg:col-span-7">
              <div className="bg-[#111a36] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
                {/* Header of Browser */}
                <div className="bg-[#060b18] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">https://mystore.kg/admin</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Админ-панель Stitch</span>
                </div>

                {/* Main Admin Area Grid */}
                <div className="grid grid-cols-12 md:h-96">
                  {/* Sidebar */}
                  <div className="col-span-4 bg-[#080d1e] p-4 border-r border-slate-800 hidden md:block">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Режим редактора</span>
                    </div>
                    <nav className="space-y-2">
                      <div className="p-2 bg-blue-600/10 text-blue-400 rounded-lg text-xs font-medium cursor-pointer">Основные настройки</div>
                      <div className="p-2 text-slate-400 hover:text-slate-200 rounded-lg text-xs cursor-pointer">Каталог товаров</div>
                      <div className="p-2 text-slate-400 hover:text-slate-200 rounded-lg text-xs cursor-pointer">Заявки и звонки</div>
                      <div className="p-2 text-slate-400 hover:text-slate-200 rounded-lg text-xs cursor-pointer">SEO / Метрика</div>
                    </nav>
                  </div>

                  {/* Settings Pane */}
                  <div className="col-span-12 md:col-span-8 p-6 flex flex-col justify-between bg-[#111a36]">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider pb-2 border-b border-slate-800">Изменение контента на сайте:</h4>
                      
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">Главный заголовок сайта</label>
                        <input 
                          type="text" 
                          value={siteTitle}
                          onChange={(e) => {
                            setSiteTitle(e.target.value)
                            setIsAdminPreviewActive(true)
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                          placeholder="Заголовок на сайте"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 block font-medium">Телефон в шапке сайта</label>
                        <input 
                          type="text" 
                          value={sitePhone}
                          onChange={(e) => {
                            setSitePhone(e.target.value)
                            setIsAdminPreviewActive(true)
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                          placeholder="+996 (555) 12-34-56"
                        />
                      </div>
                    </div>

                    {/* Site preview bubble */}
                    <div className="mt-6 p-4 bg-slate-950/60 rounded-xl border border-slate-900 relative">
                      <div className="absolute top-2 right-2 text-[8px] font-mono uppercase bg-blue-600/20 text-blue-400 border border-blue-600/30 px-1 rounded">
                        Результат на сайте
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold block">{sitePhone}</span>
                        <h5 className="font-serif-elegant font-bold text-sm sm:text-base text-white">{siteTitle}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BLOCK 4: TEAM */}
      <section id="team" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Думаете, разработчики вас не услышат?
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Знакомьтесь с командой, которая говорит на понятном языке вашего бизнеса, а не сыплет непонятными IT-терминами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Member 1: Azamat */}
          <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 text-left flex flex-col">
            <div className="h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden">
              {/* Dummy stylish abstract profile layout to avoid plain colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10" />
              <div className="w-32 h-32 rounded-full border border-blue-500/20 bg-blue-600/10 flex items-center justify-center text-4xl font-serif-elegant text-blue-400 font-bold z-10">А</div>
              <div className="absolute bottom-4 left-4 z-15 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-md px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-blue-300 font-semibold">Project Manager</div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-serif-elegant font-bold text-white">Азамат</h3>
                <p className="text-xs text-slate-400 font-medium">Руководитель проектов / Переводчик с IT-языка</p>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Избавил клиентов от 100+ часов скучного чтения технических заданий. Переводит сложные технические детали на понятные бизнес-метрики. Проводит 30-минутные интервью, чтобы ваш сайт решал задачи продаж.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 text-xs text-slate-400 italic">
                «Мы говорим о прибыли, а не о строчках кода.»
              </div>
            </div>
          </div>

          {/* Member 2: Daniyar */}
          <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 text-left flex flex-col">
            <div className="h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10" />
              <div className="w-32 h-32 rounded-full border border-blue-500/20 bg-blue-600/10 flex items-center justify-center text-4xl font-serif-elegant text-blue-400 font-bold z-10">Д</div>
              <div className="absolute bottom-4 left-4 z-15 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-md px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-blue-300 font-semibold">UX/UI Designer</div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-serif-elegant font-bold text-white">Данияр</h3>
                <p className="text-xs text-slate-400 font-medium">UX/UI аналитик / Проектировщик конверсий</p>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Спроектировал 24 интерфейса для бишкекских компаний, которые увеличили средний чек онлайн-заказов на 18%. Разрабатывает дизайн на основе тепловых карт кликов и реального поведения пользователей.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 text-xs text-slate-400 italic">
                «Дизайн должен продавать, а не просто висеть в рамочке.»
              </div>
            </div>
          </div>

          {/* Member 3: Timur */}
          <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 text-left flex flex-col">
            <div className="h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10" />
              <div className="w-32 h-32 rounded-full border border-blue-500/20 bg-blue-600/10 flex items-center justify-center text-4xl font-serif-elegant text-blue-400 font-bold z-10">Т</div>
              <div className="absolute bottom-4 left-4 z-15 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-md px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-blue-300 font-semibold">Technical Director</div>
            </div>
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-serif-elegant font-bold text-white">Тимур</h3>
                <p className="text-xs text-slate-400 font-medium">Технический директор / Скорость и Безопасность</p>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Оптимизировал скорость загрузки 50+ сайтов до 95 баллов в Google PageSpeed. Настроил безопасную отказоустойчивую архитектуру — ни один из проектов не упал под пиковой рекламной нагрузкой.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 text-xs text-slate-400 italic">
                «Каждая секунда загрузки сайта стоит клиенту 10% прибыли.»
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BLOCK 5: TESTIMONIALS */}
      <section id="testimonials" className="py-20 lg:py-28 bg-[#0b132b] relative border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Боитесь, что разработчик пропадет после сдачи?
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Читайте реальный опыт предпринимателей Бишкека, которые уже работают с нами на постоянной основе.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl p-8 text-left flex flex-col justify-between hover:border-slate-700 transition">
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  «Искал студию в Бишкеке полгода. Все кормили завтраками. Эти ребята сдали лендинг день в день, потому что в договоре прописали штрафы. Запустили рекламу, за первый месяц получили 42 заявки на просчет сметы. Админка простая, сам меняю фотографии с объектов с телефона.»
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-800/80 pt-6 mt-6">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-serif-elegant font-bold text-slate-300">Р</div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Руслан Т.</h4>
                  <p className="text-xs text-slate-400">Владелец строительной компании</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl p-8 text-left flex flex-col justify-between hover:border-slate-700 transition">
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  «Я не айтишник, меня легко запутать. Прошлый программист сделал так, что мы за каждую запятую на сайте платили. Здесь мне записали видео, как самой добавлять врачей и менять прайс. Никакой воды, всё четко. Месяц бесплатно следили за сайтом после запуска.»
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-800/80 pt-6 mt-6">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-serif-elegant font-bold text-slate-300">А</div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Айнура</h4>
                  <p className="text-xs text-slate-400">Директор медицинского центра</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#111a36]/50 border border-slate-800 rounded-2xl p-8 text-left flex flex-col justify-between hover:border-slate-700 transition">
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  «Сразу назвали конечную цену, в процессе не вылезло никаких «доплат за мобильную версию» или SEO. Сделали нормальный каталог, клиентам стало в разы удобнее скачивать прайс-листы. Работают по договору, без мутных схем. Рекомендую.»
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-800/80 pt-6 mt-6">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-serif-elegant font-bold text-slate-300">М</div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Максат</h4>
                  <p className="text-xs text-slate-400">B2B поставки оборудования</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BLOCK 6: CONTACT & BOOKING FORM */}
      <section id="booking" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-tr from-[#111a36] to-[#080d1e] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Form Info Text */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">Консультация без давления</span>
              <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]">
                Устали от навязчивых и сухих продаж?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Оставьте номер WhatsApp — мы не будем назойливо названивать. Пришлем 3 реальных примера окупаемых сайтов из вашей ниши и подготовим детальную смету до сома за 15 минут.
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-300">Расчет сметы без обязательств с вашей стороны</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-300">Отправим в удобный мессенджер (WhatsApp/Telegram)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-300">Офис в самом центре Бишкека для личных встреч</span>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#060b18]/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto border border-green-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif-elegant text-2xl font-bold text-white">Заявка принята!</h3>
                    <p className="text-slate-300 text-sm max-w-sm mx-auto">
                      Наш специалист уже готовит смету и примеры сайтов для вашей ниши. Мы свяжемся с вами в WhatsApp в течение 15 минут.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-blue-400 underline hover:text-blue-300 pt-4"
                    >
                      Отправить другую заявку
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-5 text-left">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">Ваше имя</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                        placeholder="Константин"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">WhatsApp / Телефон</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                        placeholder="+996 (555) 00-00-00"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input 
                        type="checkbox" 
                        id="agree"
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="mt-0.5 bg-slate-900 border border-slate-800 text-blue-500 rounded focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-[11px] text-slate-400 leading-tight cursor-pointer">
                        Я согласен с обработкой персональных данных. Мы гарантируем 100% конфиденциальность информации.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting || !formData.agree}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                      {isSubmitting ? 'Отправка...' : 'Получить расчет в WhatsApp'}
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#03060d] border-t border-slate-900 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="font-serif-elegant font-bold text-base text-white">S</span>
            </div>
            <div className="text-left">
              <span className="font-serif-elegant text-base font-bold text-white block">STITCH DIGITAL</span>
              <span className="text-[9px] tracking-widest block -mt-1">Разработка сайтов в Бишкеке</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="#guarantees" className="hover:text-white transition">Гарантии</a>
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#team" className="hover:text-white transition">Команда</a>
            <a href="#testimonials" className="hover:text-white transition">Отзывы</a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-slate-300">Офис: г. Бишкек, ул. Киевская 114</p>
            <p className="text-slate-400">Телефон: +996 (555) 12-34-56</p>
            <p>© {new Date().getFullYear()} OOO «Стич Диджитал». Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* ROI CALCULATOR MODAL */}
      {calcModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-[#060b18]/90 backdrop-blur-sm" onClick={() => setCalcModalOpen(false)} />
          
          <div className="relative bg-[#0b132b] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 text-left">
            <button 
              onClick={() => setCalcModalOpen(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800">
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Детализация ROI воронки</span>
                <h3 className="font-serif-elegant text-2xl font-bold text-white mt-1">Окупаемость разработки</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex justify-between text-xs font-medium text-slate-300">
                      <span>Средний чек (сом)</span>
                      <span className="text-blue-400 font-mono font-semibold">{avgCheck.toLocaleString('ru-RU')} сом</span>
                    </label>
                    <input 
                      type="range" min="1000" max="150000" step="1000" value={avgCheck}
                      onChange={(e) => setAvgCheck(Number(e.target.value))}
                      className="w-full accent-blue-500 bg-slate-900 rounded-lg appearance-none h-2 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex justify-between text-xs font-medium text-slate-300">
                      <span>Трафик в месяц (чел.)</span>
                      <span className="text-blue-400 font-mono font-semibold">{traffic.toLocaleString('ru-RU')}</span>
                    </label>
                    <input 
                      type="range" min="500" max="30000" step="500" value={traffic}
                      onChange={(e) => setTraffic(Number(e.target.value))}
                      className="w-full accent-blue-500 bg-slate-900 rounded-lg appearance-none h-2 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex justify-between text-xs font-medium text-slate-300">
                      <span>Конверсия (%)</span>
                      <span className="text-blue-400 font-mono font-semibold">{conversion}%</span>
                    </label>
                    <input 
                      type="range" min="0.5" max="15" step="0.5" value={conversion}
                      onChange={(e) => setConversion(Number(e.target.value))}
                      className="w-full accent-blue-500 bg-slate-900 rounded-lg appearance-none h-2 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="bg-[#111a36] rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/80">
                      <span className="text-slate-400">Показатель</span>
                      <span className="text-slate-400">Значение</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Целевых заявок</span>
                      <span className="text-base font-semibold text-white font-mono">{calculatedLeads} шт.</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Конверсия продаж (30%)</span>
                      <span className="text-base font-semibold text-white font-mono">{Math.round(calculatedLeads * 0.3)} продаж</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-850">
                      <span className="text-sm text-slate-300 font-medium">Дополнительный доход</span>
                      <span className="text-lg font-bold text-green-400 font-mono">{Math.round(calculatedLeads * 0.3 * avgCheck).toLocaleString('ru-RU')} сом</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 leading-normal bg-slate-900/60 p-3 rounded-lg border border-slate-850/50 mt-4">
                    * Расчет основан на консервативной конверсии в продажи 30% от полученных заявок. Мы гарантируем настроить воронку так, чтобы отслеживать каждую сому окупаемости.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-end">
                <button 
                  onClick={() => setCalcModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-300 rounded-lg border border-slate-800 text-xs font-semibold uppercase tracking-wider transition"
                >
                  Закрыть
                </button>
                <button 
                  onClick={() => { setCalcModalOpen(false); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition"
                >
                  Обсудить детальнее в офисе
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
