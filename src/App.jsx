import { useState } from 'react'
import { 
  Check, 
  ArrowRight, 
  X, 
  Menu,
  ChevronRight,
  CheckCircle2,
  Lock,
  Eye,
  Settings,
  Shield,
  FileText,
  HelpCircle
} from 'lucide-react'

// Custom Monogram 'e' SVG matching the extra.kg brand book specifications
const LogoIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Upper stroke (Cream #FAF7F0) */}
    <path 
      d="M 35 50 H 73 C 73 34 62 24 49 24 C 36 24 28 34 26 44" 
      stroke="#FAF7F0" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Lower stroke (Green #75A47B) */}
    <path 
      d="M 70 58 C 68 70 58 76 47 76 C 33 76 24 66 25 53" 
      stroke="#75A47B" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
)

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [interactiveStep, setInteractiveStep] = useState(1) // Step-by-step visual workflow
  
  // Interactive mock admin state
  const [siteTitle, setSiteTitle] = useState('Аренда спецтехники в Бишкеке')
  const [sitePhone, setSitePhone] = useState('+996 (555) 12-34-56')

  // Form capture state
  const [formData, setFormData] = useState({ name: '', contact: '', agree: true })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.contact) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
      setFormData({ name: '', contact: '', agree: true })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#223047] text-[#FAF7F0] font-sans selection:bg-[#75A47B] selection:text-[#FAF7F0] relative overflow-hidden">
      
      {/* Decorative Brand Patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8D8DE]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#75A47B]/5 blur-[150px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#223047]/95 backdrop-blur-sm border-b border-[#FAF7F0]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoIcon className="w-9 h-9" />
            <span className="font-onest text-2xl font-bold tracking-tight text-[#FAF7F0]">extra.kg</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-[#FAF7F0]/80 hover:text-white transition">Подход</a>
            <a href="#process" className="text-sm font-medium text-[#FAF7F0]/80 hover:text-white transition">Процесс</a>
            <a href="#services" className="text-sm font-medium text-[#FAF7F0]/80 hover:text-white transition">Услуги</a>
            <a href="#admin-panel" className="text-sm font-medium text-[#FAF7F0]/80 hover:text-white transition">Управление</a>
            <a href="#team" className="text-sm font-medium text-[#FAF7F0]/80 hover:text-white transition">Команда</a>
            <a href="#testimonials" className="text-sm font-medium text-[#FAF7F0]/80 hover:text-white transition">Отзывы</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/996555123456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F0] px-5 py-2.5 border border-[#FAF7F0]/20 hover:border-[#FAF7F0]/40 rounded-lg transition duration-200"
            >
              Написать в WhatsApp
            </a>
            <a 
              href="#booking"
              className="bg-[#75A47B] hover:bg-[#66916b] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg transition duration-200 shadow-md shadow-[#75A47B]/20"
            >
              Начать проект
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#FAF7F0]/80 hover:text-white focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-[#223047]/90 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#223047] border-l border-[#FAF7F0]/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <LogoIcon className="w-8 h-8" />
                  <span className="font-onest text-xl font-bold text-[#FAF7F0]">extra.kg</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-[#FAF7F0]/85 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FAF7F0]/90 hover:text-white">Подход</a>
                <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FAF7F0]/90 hover:text-white">Процесс</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FAF7F0]/90 hover:text-white">Услуги</a>
                <a href="#admin-panel" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FAF7F0]/90 hover:text-white">Управление</a>
                <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FAF7F0]/90 hover:text-white">Команда</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FAF7F0]/90 hover:text-white">Отзывы</a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/996555123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-[#FAF7F0]/20 text-[#FAF7F0]/90 rounded-lg"
              >
                WhatsApp
              </a>
              <a 
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#75A47B] text-[#FAF7F0] rounded-lg font-semibold"
              >
                Начать проект
              </a>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FAF7F0]/5 border border-[#FAF7F0]/10">
              <span className="w-2 h-2 rounded-full bg-[#75A47B]" />
              <span className="text-xs uppercase tracking-widest text-[#FAF7F0]/80 font-medium">Понятный процесс без барьеров</span>
            </div>
            
            <h1 className="font-onest text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F0] leading-[1.1]">
              Расскажите о бизнесе.<br />
              <span className="text-[#C8D8DE] italic font-normal">Мы соберём сайт.</span>
            </h1>

            <p className="text-lg text-[#FAF7F0]/90 max-w-2xl leading-relaxed">
              **extra.kg** — понятный цифровой партнёр для предпринимателей и небольших команд. Мы берём на себя путь от первого интервью до запуска, объясняем сложные решения простым языком и сохраняем ваш полный контроль над сроками, стоимостью, правками и доступами.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#booking"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#75A47B] hover:bg-[#66916b] text-[#FAF7F0] font-semibold rounded-lg shadow-lg shadow-[#75A47B]/10 transition duration-200 active:scale-[0.98]"
              >
                Обсудить проект
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#process"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FAF7F0]/5 hover:bg-[#FAF7F0]/10 text-[#FAF7F0] font-medium rounded-lg border border-[#FAF7F0]/15 hover:border-[#FAF7F0]/25 transition duration-200"
              >
                Как мы работаем
              </a>
            </div>

            <div className="border-t border-[#FAF7F0]/10 pt-8 mt-6">
              <p className="text-xs text-[#FAF7F0]/60 uppercase tracking-widest font-semibold">Позиционирование</p>
              <p className="text-base text-[#C8D8DE] mt-1 font-medium">
                «Профессиональная разработка сайта без технического барьера и скрытых этапов»
              </p>
            </div>
          </div>

          {/* Hero Visual Brand Asset */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#C8D8DE]/5 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 rounded-2xl p-8 w-full max-w-sm text-center backdrop-blur-md">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-[#223047] flex items-center justify-center shadow-lg border border-[#FAF7F0]/10">
                  <LogoIcon className="w-16 h-16" />
                </div>
              </div>
              <h3 className="font-onest text-2xl font-bold text-[#FAF7F0]">extra.kg</h3>
              <p className="text-xs text-[#C8D8DE] uppercase tracking-widest mt-1.5 font-medium">Основа бренда</p>
              
              <div className="mt-6 pt-6 border-t border-[#FAF7F0]/10 text-left space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#75A47B] mt-1.5" />
                  <p className="text-xs text-[#FAF7F0]/80">**Открытая монограмма**: разрыв обозначает диалог и гибкость.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8D8DE] mt-1.5" />
                  <p className="text-xs text-[#FAF7F0]/80">**Верхний элемент**: означает структуру, архитектуру и направление.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#75A47B] mt-1.5" />
                  <p className="text-xs text-[#FAF7F0]/80">**Нижний элемент**: означает поддержку на всех этапах.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND ESSENCE / CORE VALUES */}
      <section id="about" className="py-20 lg:py-28 bg-[#FAF7F0]/5 border-y border-[#FAF7F0]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#75A47B] font-bold">Сущность нашего бренда</span>
            <h2 className="font-onest text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F0]">
              Разработка сайта на человеческом языке
            </h2>
            <div className="w-12 h-0.5 bg-[#75A47B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: No jargon */}
            <div className="bg-[#223047]/60 border border-[#FAF7F0]/10 rounded-xl p-8 hover:border-[#FAF7F0]/20 transition duration-300 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C8D8DE] block mb-3">01 / ДИАЛОГ</span>
                <h3 className="font-onest text-xl font-bold text-[#FAF7F0] mb-3">Без технического снобизма</h3>
                <p className="text-sm text-[#FAF7F0]/80 leading-relaxed">
                  Мы говорим о бизнес-задачах, а не о сложных IT-терминах. Вам не нужно быть разработчиком, чтобы получить качественный продукт и понимать весь процесс.
                </p>
              </div>
              <div className="pt-6 border-t border-[#FAF7F0]/10 mt-6 text-xs text-[#75A47B] font-semibold">
                ✓ Объясняем каждое решение
              </div>
            </div>

            {/* Feature 2: Cost Control */}
            <div className="bg-[#223047]/60 border border-[#FAF7F0]/10 rounded-xl p-8 hover:border-[#FAF7F0]/20 transition duration-300 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C8D8DE] block mb-3">02 / КОНТРОЛЬ</span>
                <h3 className="font-onest text-xl font-bold text-[#FAF7F0] mb-3">Прозрачность сметы и правок</h3>
                <p className="text-sm text-[#FAF7F0]/80 leading-relaxed">
                  Фиксируем перечень работ, количество правок и итоговую стоимость до начала разработки. Никаких внезапных доплат за мобильную адаптивность или шрифты.
                </p>
              </div>
              <div className="pt-6 border-t border-[#FAF7F0]/10 mt-6 text-xs text-[#75A47B] font-semibold">
                ✓ Прописано в договоре
              </div>
            </div>

            {/* Feature 3: Complete Access */}
            <div className="bg-[#223047]/60 border border-[#FAF7F0]/10 rounded-xl p-8 hover:border-[#FAF7F0]/20 transition duration-300 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C8D8DE] block mb-3">03 / Свобода</span>
                <h3 className="font-onest text-xl font-bold text-[#FAF7F0] mb-3">Вы — хозяин своего проекта</h3>
                <p className="text-sm text-[#FAF7F0]/80 leading-relaxed">
                  Передаём 100% прав на код, домен, хостинг и админ-панель сразу после сдачи. Вы свободны управлять сайтом самостоятельно без обязательной подписки на поддержку.
                </p>
              </div>
              <div className="pt-6 border-t border-[#FAF7F0]/10 mt-6 text-xs text-[#75A47B] font-semibold">
                ✓ Полный пакет доступов
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE WORKFLOW (PROCESS) */}
      <section id="process" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#75A47B] font-bold">Как мы создаём проекты</span>
          <h2 className="font-onest text-3xl sm:text-4xl font-bold text-[#FAF7F0]">
            Пошаговый путь без тревоги
          </h2>
          <p className="text-sm text-[#C8D8DE]">Снижаем неопределенность, фиксируя результаты на каждом этапе.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Step list (Interactive targets) */}
          <div className="lg:col-span-5 space-y-3.5 text-left">
            {[
              { id: 1, num: "01", title: "Интервью и исследование", desc: "Обсуждаем задачи бизнеса, изучаем конкурентов на рынке Бишкека и формируем структуру." },
              { id: 2, num: "02", title: "Проектирование и дизайн", desc: "Создаем удобный интерфейс. Согласовываем каждую страницу до написания кода." },
              { id: 3, num: "03", title: "Разработка и интеграция", desc: "Верстаем сайт, подключаем платежи и системы аналитики, оптимизируем скорость загрузки." },
              { id: 4, num: "04", title: "Передача доступов и обучение", desc: "Регистрируем домен/хостинг на ваше лицо, записываем видеоинструкции к панели управления." }
            ].map((step) => (
              <button 
                key={step.id}
                onClick={() => setInteractiveStep(step.id)}
                className={`w-full p-5 rounded-lg border text-left transition duration-200 flex items-start gap-4 ${
                  interactiveStep === step.id 
                    ? 'bg-[#FAF7F0]/10 border-[#FAF7F0]/30 shadow-md' 
                    : 'bg-transparent border-[#FAF7F0]/10 hover:border-[#FAF7F0]/20'
                }`}
              >
                <span className={`font-mono text-sm font-bold px-2 py-1 rounded ${
                  interactiveStep === step.id ? 'bg-[#75A47B] text-[#FAF7F0]' : 'bg-[#FAF7F0]/5 text-[#C8D8DE]'
                }`}>
                  {step.num}
                </span>
                <div>
                  <h3 className="font-onest text-base font-bold text-[#FAF7F0]">{step.title}</h3>
                  {interactiveStep === step.id && (
                    <p className="text-xs text-[#C8D8DE] mt-2 leading-relaxed">{step.desc}</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Visual stage visualizer */}
          <div className="lg:col-span-7 bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 rounded-2xl p-6 sm:p-8 min-h-[300px] flex flex-col justify-between text-left">
            <div className="pb-4 border-b border-[#FAF7F0]/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#C8D8DE]">Фокус этапа: {interactiveStep} из 4</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#75A47B] animate-ping" />
            </div>

            {interactiveStep === 1 && (
              <div className="space-y-4 py-6">
                <h4 className="text-lg font-onest font-bold text-white">1. Сбор информации о вашем бизнесе</h4>
                <p className="text-sm text-[#C8D8DE]/90 leading-relaxed">
                  Мы начинаем с 30-минутного понятного интервью. Нам важно узнать ваши услуги, аудиторию и то, как вы совершаете продажи. Никаких сложных брифов для самостоятельного заполнения на 20 страниц.
                </p>
                <div className="bg-[#223047] p-3 rounded border border-[#FAF7F0]/5">
                  <span className="text-[10px] text-[#75A47B] font-bold block mb-1">РЕЗУЛЬТАТ ЭТАПА:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Документ с описанием аудитории, целями сайта и согласованной сметой.</p>
                </div>
              </div>
            )}

            {interactiveStep === 2 && (
              <div className="space-y-4 py-6">
                <h4 className="text-lg font-onest font-bold text-white">2. Разработка структуры и дизайн-концепта</h4>
                <p className="text-sm text-[#C8D8DE]/90 leading-relaxed">
                  Сначала мы проектируем логику разделов и переходы. Затем создаем дизайн-макет. Все элементы прорисовываются индивидуально под вас, без использования бесплатных шаблонов низкого качества.
                </p>
                <div className="bg-[#223047] p-3 rounded border border-[#FAF7F0]/5">
                  <span className="text-[10px] text-[#75A47B] font-bold block mb-1">РЕЗУЛЬТАТ ЭТАПА:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Ссылка на дизайн-макет в Figma для визуального утверждения всех разделов.</p>
                </div>
              </div>
            )}

            {interactiveStep === 3 && (
              <div className="space-y-4 py-6">
                <h4 className="text-lg font-onest font-bold text-white">3. Вёрстка, код и технические интеграции</h4>
                <p className="text-sm text-[#C8D8DE]/90 leading-relaxed">
                  Переносим дизайн в рабочий код. Оптимизируем под мобильные экраны, подключаем необходимые модули (заказ, WhatsApp, корзину), настраиваем базовое SEO и интеграцию платежей через MBank / Элкарт.
                </p>
                <div className="bg-[#223047] p-3 rounded border border-[#FAF7F0]/5">
                  <span className="text-[10px] text-[#75A47B] font-bold block mb-1">РЕЗУЛЬТАТ ЭТАПА:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Полностью готовый работающий сайт на тестовом домене для проверки.</p>
                </div>
              </div>
            )}

            {interactiveStep === 4 && (
              <div className="space-y-4 py-6">
                <h4 className="text-lg font-onest font-bold text-white">4. Полная автономия вашего бизнеса</h4>
                <p className="text-sm text-[#C8D8DE]/90 leading-relaxed">
                  При сдаче проекта мы передаем доступы ко всем аккаунтам. Записываем для вас персональные короткие видеоуроки, показывающие, как менять ценники, обновлять услуги или добавлять новые контакты без программиста.
                </p>
                <div className="bg-[#223047] p-3 rounded border border-[#FAF7F0]/5">
                  <span className="text-[10px] text-[#75A47B] font-bold block mb-1">РЕЗУЛЬТАТ ЭТАПА:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Передача актов приема-передачи доступов, видеоинструкции, перенос на ваш домен.</p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#FAF7F0]/10 flex justify-between items-center text-xs text-[#FAF7F0]/50">
              <span>extra.kg · понятный процесс</span>
              <a href="#booking" className="text-[#75A47B] hover:underline font-semibold">Начать проект →</a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section id="services" className="py-20 lg:py-28 bg-[#FAF7F0]/5 border-y border-[#FAF7F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#75A47B] font-bold">Наши услуги</span>
            <h2 className="font-onest text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F0]">
              Понятные типы сайтов под ваши задачи
            </h2>
            <p className="text-sm text-[#C8D8DE]">Никакого навязывания лишних модулей. Вы понимаете, за что именно платите.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Landing Page */}
            <div className="bg-[#223047]/80 border border-[#FAF7F0]/10 hover:border-[#75A47B]/30 rounded-xl p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-onest text-xl font-bold text-white">Сайт-визитка / Landing Page</h3>
                    <p className="text-xs text-[#C8D8DE] mt-1">Презентация услуги или товара</p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0]/5 p-4 rounded-lg border border-[#FAF7F0]/5 text-left mb-6">
                  <span className="text-[9px] font-semibold uppercase text-[#C8D8DE] block tracking-wider mb-1">Для чего подходит:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Быстрый запуск информации об одном продукте, услуге или мероприятии с формой заказа.</p>
                </div>

                <ul className="space-y-3 text-left mb-8 text-sm text-[#FAF7F0]/80">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Анализ предложений конкурентов</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Проработка понятной структуры блоков</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Настройка контактных форм в WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Подключение карт и контактов</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-t border-[#FAF7F0]/10 pt-6 mb-6 text-left">
                  <span className="text-xs text-[#C8D8DE] block">Ориентировочный срок</span>
                  <span className="text-sm font-semibold text-white font-mono">10–14 рабочих дней</span>
                </div>
                <a 
                  href="#booking"
                  className="w-full py-3 bg-[#FAF7F0]/5 hover:bg-[#FAF7F0]/10 text-white font-medium rounded-lg border border-[#FAF7F0]/15 transition flex items-center justify-center gap-1.5"
                >
                  Обсудить решение
                </a>
              </div>
            </div>

            {/* Corporate Website */}
            <div className="bg-[#223047]/80 border-2 border-[#75A47B] rounded-xl p-8 flex flex-col justify-between transition-all duration-300 relative">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#75A47B] rounded-full text-[10px] uppercase font-bold tracking-widest text-[#FAF7F0]">
                Популярно для бизнеса
              </div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-onest text-xl font-bold text-white">Корпоративный сайт</h3>
                    <p className="text-xs text-[#C8D8DE] mt-1">Многостраничный сайт компании</p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0]/5 p-4 rounded-lg border border-[#FAF7F0]/5 text-left mb-6">
                  <span className="text-[9px] font-semibold uppercase text-[#75A47B] block tracking-wider mb-1">Для чего подходит:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Презентация услуг компании, прайс-листов, структуры отделов, портфолио или выполненных работ.</p>
                </div>

                <ul className="space-y-3 text-left mb-8 text-sm text-[#FAF7F0]/80">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Понятная CMS для самостоятельного ведения</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Модуль добавления новостей, отзывов, вакансий</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Индивидуальный дизайн внутренних разделов</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Видеоурок по редактированию для сотрудников</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-t border-[#FAF7F0]/10 pt-6 mb-6 text-left">
                  <span className="text-xs text-[#C8D8DE] block">Ориентировочный срок</span>
                  <span className="text-sm font-semibold text-white font-mono">20–30 рабочих дней</span>
                </div>
                <a 
                  href="#admin-panel"
                  className="w-full py-3 bg-[#75A47B] hover:bg-[#66916b] text-[#FAF7F0] font-semibold rounded-lg transition flex items-center justify-center gap-1.5"
                >
                  Попробовать админку ниже
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="bg-[#223047]/80 border border-[#FAF7F0]/10 hover:border-[#75A47B]/30 rounded-xl p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-onest text-xl font-bold text-white">Интернет-магазин</h3>
                    <p className="text-xs text-[#C8D8DE] mt-1">Каталог товаров с корзиной</p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0]/5 p-4 rounded-lg border border-[#FAF7F0]/5 text-left mb-6">
                  <span className="text-[9px] font-semibold uppercase text-[#C8D8DE] block tracking-wider mb-1">Для чего подходит:</span>
                  <p className="text-xs text-[#FAF7F0]/80">Продажа товаров онлайн. Удобный каталог, фильтрация товаров, оформление заказа и личный кабинет.</p>
                </div>

                <ul className="space-y-3 text-left mb-8 text-sm text-[#FAF7F0]/80">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Интеграция платежей (Элкарт, MBank, O!Деньги)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Удобное управление заказами из админ-панели</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Импорт/экспорт каталога товаров из Excel/1С</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#75A47B] mt-0.5 shrink-0" />
                    <span>Оптимизация корзины под мобильные устройства</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-t border-[#FAF7F0]/10 pt-6 mb-6 text-left">
                  <span className="text-xs text-[#C8D8DE] block">Ориентировочный срок</span>
                  <span className="text-sm font-semibold text-white font-mono">30–45 рабочих дней</span>
                </div>
                <a 
                  href="#booking"
                  className="w-full py-3 bg-[#FAF7F0]/5 hover:bg-[#FAF7F0]/10 text-white font-medium rounded-lg border border-[#FAF7F0]/15 transition flex items-center justify-center gap-1.5"
                >
                  Обсудить интеграцию
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE ADMIN PREVIEW (Админка, в которой не страшно) */}
      <section id="admin-panel" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Admin Text */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF7F0]/5 border border-[#FAF7F0]/10">
              <Lock className="w-3.5 h-3.5 text-[#75A47B]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#FAF7F0]/80">Простое администрирование</span>
            </div>
            <h2 className="font-onest text-3xl sm:text-4xl font-bold text-white leading-tight">
              Админка, в которой действительно легко менять информацию
            </h2>
            <p className="text-sm text-[#C8D8DE] leading-relaxed">
              Мы создаем сайты с понятным интерфейсом. Вам не придется открывать код или платить специалисту за каждую измененную букву или цифру. Попробуйте изменить форму справа и убедитесь, как это работает на реальном сайте.
            </p>
            <div className="space-y-3.5 text-sm text-[#FAF7F0]/90">
              <div className="flex items-center gap-2.5">
                <Check className="w-4.5 h-4.5 text-[#75A47B] shrink-0" />
                <span>Никаких сложных блоков с кодом — всё визуально понятно</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4.5 h-4.5 text-[#75A47B] shrink-0" />
                <span>Добавление контактов и изменение ценников в один клик</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4.5 h-4.5 text-[#75A47B] shrink-0" />
                <span>Обучение вашего менеджера включено в работу</span>
              </div>
            </div>
          </div>

          {/* Admin Interactive Sandbox App */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 rounded-xl overflow-hidden shadow-2xl text-left">
              {/* Header Bar */}
              <div className="bg-[#223047] px-4 py-3 border-b border-[#FAF7F0]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="text-[10px] font-mono text-[#C8D8DE] bg-[#FAF7F0]/5 px-2 py-0.5 rounded border border-[#FAF7F0]/10 ml-2">extra.kg/admin-demo</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-mono text-[#FAF7F0]/50">Панель управления</span>
              </div>

              {/* Workspace */}
              <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-[300px]">
                {/* Sidebar Mock */}
                <div className="md:col-span-4 bg-[#FAF7F0]/5 p-4 border-r border-[#FAF7F0]/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#FAF7F0]/10">
                      <Settings className="w-4.5 h-4.5 text-[#C8D8DE]" />
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#FAF7F0]">Разделы сайта</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-[#FAF7F0]/80">
                      <div className="px-2.5 py-1.5 bg-[#FAF7F0]/10 rounded font-medium text-white cursor-pointer">Шапка и контакты</div>
                      <div className="px-2.5 py-1.5 hover:bg-[#FAF7F0]/5 rounded cursor-pointer text-[#C8D8DE]">Главный экран</div>
                      <div className="px-2.5 py-1.5 hover:bg-[#FAF7F0]/5 rounded cursor-pointer text-[#C8D8DE]">Наши услуги</div>
                    </div>
                  </div>
                  <div className="hidden md:block pt-4 text-[9px] text-[#FAF7F0]/30 font-mono">
                    extra.kg v2.0
                  </div>
                </div>

                {/* Form Controls */}
                <div className="md:col-span-8 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#75A47B]">Конфигурация шапки</span>
                    
                    <div className="space-y-1">
                      <label className="text-[11px] text-[#C8D8DE] block font-medium">Главный заголовок сайта</label>
                      <input 
                        type="text" 
                        value={siteTitle}
                        onChange={(e) => setSiteTitle(e.target.value)}
                        className="w-full bg-[#223047] border border-[#FAF7F0]/15 rounded px-3 py-2 text-xs text-[#FAF7F0] focus:outline-none focus:border-[#75A47B] transition"
                        placeholder="Название вашей компании"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-[#C8D8DE] block font-medium">Телефон для клиентов</label>
                      <input 
                        type="text" 
                        value={sitePhone}
                        onChange={(e) => setSitePhone(e.target.value)}
                        className="w-full bg-[#223047] border border-[#FAF7F0]/15 rounded px-3 py-2 text-xs text-[#FAF7F0] focus:outline-none focus:border-[#75A47B] transition"
                        placeholder="+996 (555) 00-00-00"
                      />
                    </div>
                  </div>

                  {/* Preview Container representing the site update */}
                  <div className="mt-6 p-4 bg-[#223047] rounded-lg border border-[#FAF7F0]/10 relative">
                    <div className="absolute top-2 right-2 text-[8px] uppercase tracking-wider bg-[#75A47B]/20 text-[#75A47B] border border-[#75A47B]/30 px-1.5 py-0.5 rounded font-mono font-semibold">
                      Live Превью
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] tracking-widest text-[#FAF7F0]/60 block font-bold">{sitePhone}</span>
                      <h5 className="font-onest font-bold text-sm text-[#FAF7F0] pr-12 leading-snug">{siteTitle}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: TEAM */}
      <section id="team" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#75A47B] font-bold">Наша команда</span>
          <h2 className="font-onest text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F0]">
            Специалисты без технического снобизма
          </h2>
          <div className="w-12 h-0.5 bg-[#75A47B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Azamat */}
          <div className="bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 rounded-xl overflow-hidden hover:border-[#FAF7F0]/25 transition duration-300 text-left flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#75A47B]/15 border border-[#75A47B]/30 flex items-center justify-center text-lg font-onest text-[#75A47B] font-bold">
                  А
                </div>
                <div>
                  <h3 className="font-onest text-lg font-bold text-white leading-tight">Азамат</h3>
                  <span className="text-xs text-[#C8D8DE] uppercase tracking-wider block mt-0.5">Руководитель проектов</span>
                </div>
              </div>
              <p className="text-xs text-[#FAF7F0]/80 leading-relaxed pt-2">
                Помогает сформулировать требования к будущему сайту без необходимости писать сложные и скучные ТЗ. Ведет весь процесс коммуникации на простом человеческом языке, отвечая за соблюдение оговоренных сроков.
              </p>
            </div>
            <div className="p-6 border-t border-[#FAF7F0]/10 text-[10px] text-[#C8D8DE] italic uppercase tracking-wider">
              «Отвечаю за ваш покой в процессе»
            </div>
          </div>

          {/* Daniyar */}
          <div className="bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 rounded-xl overflow-hidden hover:border-[#FAF7F0]/25 transition duration-300 text-left flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#75A47B]/15 border border-[#75A47B]/30 flex items-center justify-center text-lg font-onest text-[#75A47B] font-bold">
                  Д
                </div>
                <div>
                  <h3 className="font-onest text-lg font-bold text-white leading-tight">Данияр</h3>
                  <span className="text-xs text-[#C8D8DE] uppercase tracking-wider block mt-0.5">UX/UI Дизайнер</span>
                </div>
              </div>
              <p className="text-xs text-[#FAF7F0]/80 leading-relaxed pt-2">
                Слушает ваши пожелания и проектирует удобный, лаконичный макет. Избегает ненужной перегруженной графики, ориентируясь на легкость восприятия информации клиентом и удобство на смартфонах.
              </p>
            </div>
            <div className="p-6 border-t border-[#FAF7F0]/10 text-[10px] text-[#C8D8DE] italic uppercase tracking-wider">
              «Дизайн должен быть ясен с первой секунды»
            </div>
          </div>

          {/* Timur */}
          <div className="bg-[#FAF7F0]/5 border border-[#FAF7F0]/10 rounded-xl overflow-hidden hover:border-[#FAF7F0]/25 transition duration-300 text-left flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#75A47B]/15 border border-[#75A47B]/30 flex items-center justify-center text-lg font-onest text-[#75A47B] font-bold">
                  Т
                </div>
                <div>
                  <h3 className="font-onest text-lg font-bold text-white leading-tight">Тимур</h3>
                  <span className="text-xs text-[#C8D8DE] uppercase tracking-wider block mt-0.5">Разработчик</span>
                </div>
              </div>
              <p className="text-xs text-[#FAF7F0]/80 leading-relaxed pt-2">
                Переносит дизайн-макеты в чистый и быстрый код. Отвечает за бесперебойную техническую работу, настраивает интеграцию платежных шлюзов, модулей и подготавливает удобную панель редактирования.
              </p>
            </div>
            <div className="p-6 border-t border-[#FAF7F0]/10 text-[10px] text-[#C8D8DE] italic uppercase tracking-wider">
              «Создаю легкий код для быстрой загрузки»
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF7F0]/5 border-y border-[#FAF7F0]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#75A47B] font-bold">Отзывы клиентов</span>
            <h2 className="font-onest text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F0]">
              Опыт работы с extra.kg
            </h2>
            <div className="w-12 h-0.5 bg-[#75A47B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="bg-[#223047] border border-[#FAF7F0]/10 rounded-xl p-8 text-left flex flex-col justify-between hover:border-[#FAF7F0]/20 transition">
              <p className="text-xs text-[#FAF7F0]/80 leading-relaxed italic mb-8">
                «Понравилось, что при обсуждении проекта с Азаматом мы не запутались в терминологии. Сроки были соблюдены, сайт работает быстро, все доступы от домена и хостинга передали нам по акту сразу после оплаты.»
              </p>
              <div className="flex items-center gap-3 border-t border-[#FAF7F0]/10 pt-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#C8D8DE]/20 flex items-center justify-center font-onest font-bold text-[#C8D8DE] text-sm">Р</div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Руслан Т.</h4>
                  <p className="text-[10px] text-[#C8D8DE]">Владелец строительной компании</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#223047] border border-[#FAF7F0]/10 rounded-xl p-8 text-left flex flex-col justify-between hover:border-[#FAF7F0]/20 transition">
              <p className="text-xs text-[#FAF7F0]/80 leading-relaxed italic mb-8">
                «Ребята записали для нас короткую видеоинструкцию по редактированию прайс-листов и врачей на сайте. Теперь наш администратор без проблем сама меняет цены и расписание, и нам не приходится за это доплачивать.»
              </p>
              <div className="flex items-center gap-3 border-t border-[#FAF7F0]/10 pt-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#C8D8DE]/20 flex items-center justify-center font-onest font-bold text-[#C8D8DE] text-sm">А</div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Айнура</h4>
                  <p className="text-[10px] text-[#C8D8DE]">Директор медицинского центра</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#223047] border border-[#FAF7F0]/10 rounded-xl p-8 text-left flex flex-col justify-between hover:border-[#FAF7F0]/20 transition">
              <p className="text-xs text-[#FAF7F0]/80 leading-relaxed italic mb-8">
                «Никаких неожиданных доплат в процессе не возникло. Сразу оговорили и зафиксировали стоимость, структуру и количество возможных бесплатных правок. Удобно вести дела, когда всё открыто и понятно.»
              </p>
              <div className="flex items-center gap-3 border-t border-[#FAF7F0]/10 pt-4 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#C8D8DE]/20 flex items-center justify-center font-onest font-bold text-[#C8D8DE] text-sm">М</div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Максат</h4>
                  <p className="text-[10px] text-[#C8D8DE]">B2B поставки оборудования</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT FORM */}
      <section id="booking" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-tr from-[#FAF7F0]/5 to-transparent border border-[#FAF7F0]/10 rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Form text */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#75A47B] font-bold block">Свяжитесь с нами</span>
              <h2 className="font-onest text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Давайте обсудим ваш будущий сайт
              </h2>
              <p className="text-sm text-[#C8D8DE] leading-relaxed max-w-lg">
                Оставьте контактные данные. Мы свяжемся с вами в течение 15 минут в мессенджере WhatsApp или по телефону для вводного обсуждения проекта.
              </p>

              <div className="pt-4 space-y-3.5 text-sm text-[#FAF7F0]/80">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#75A47B]/20 flex items-center justify-center text-[#75A47B]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Первая консультация и интервью проводятся бесплатно</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#75A47B]/20 flex items-center justify-center text-[#75A47B]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Офис для личных встреч в самом центре Бишкека</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#75A47B]/20 flex items-center justify-center text-[#75A47B]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Полная юридическая прозрачность по договору</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#223047]/80 border border-[#FAF7F0]/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
                
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-[#75A47B]/20 rounded-full flex items-center justify-center text-[#75A47B] mx-auto border border-[#75A47B]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-onest text-xl font-bold text-white">Заявка успешно принята!</h3>
                    <p className="text-xs text-[#C8D8DE] max-w-sm mx-auto leading-relaxed">
                      Мы подготовим информацию и свяжемся с вами в WhatsApp в течение 15 минут для согласования времени звонка.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#75A47B] hover:underline pt-4 font-semibold"
                    >
                      Отправить повторно
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                    <div>
                      <label className="text-xs font-semibold text-[#FAF7F0] block mb-1.5">Ваше имя</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#223047] border border-[#FAF7F0]/15 focus:border-[#75A47B] rounded-lg px-4 py-3 text-xs text-white focus:outline-none transition duration-200"
                        placeholder="Например, Константин"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#FAF7F0] block mb-1.5">WhatsApp или Номер телефона</label>
                      <input 
                        type="text" 
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full bg-[#223047] border border-[#FAF7F0]/15 focus:border-[#75A47B] rounded-lg px-4 py-3 text-xs text-white focus:outline-none transition duration-200"
                        placeholder="+996 (555) 00-00-00"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input 
                        type="checkbox" 
                        id="agree"
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="mt-0.5 bg-[#223047] border border-[#FAF7F0]/15 rounded cursor-pointer accent-[#75A47B]"
                      />
                      <label htmlFor="agree" className="text-[10px] text-[#C8D8DE] leading-tight cursor-pointer">
                        Я согласен с обработкой персональных данных. extra.kg гарантирует конфиденциальность.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting || !formData.agree}
                      className="w-full py-3.5 bg-[#75A47B] hover:bg-[#66916b] disabled:bg-slate-800 disabled:text-slate-500 text-[#FAF7F0] font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#75A47B]/10 active:scale-[0.98]"
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#223047] border-t border-[#FAF7F0]/10 py-12 text-[#C8D8DE] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-8 h-8" />
            <div className="text-left">
              <span className="font-onest text-lg font-bold text-white block leading-tight">extra.kg</span>
              <span className="text-[9px] tracking-wider block mt-0.5 text-[#C8D8DE]/80 uppercase">Понятная веб-разработка</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#FAF7F0]/80">
            <a href="#about" className="hover:text-white transition">Подход</a>
            <a href="#process" className="hover:text-white transition">Процесс</a>
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#team" className="hover:text-white transition">Команда</a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-[#FAF7F0]/90">Бишкек, Кыргызстан</p>
            <p className="text-[#C8D8DE]/70">© {new Date().getFullYear()} extra.kg · Brand Book v2.0</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
