import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "en" | "pt"
const LanguageContext = createContext<{ language: Language; setLanguage: (value: Language) => void }>({ language: "en", setLanguage: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem("portfolio-language") === "pt" ? "pt" : "en" } catch { return "en" }
  })
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en"
    document.title = language === "pt" ? "Artur Ferro | Programador" : "Artur Ferro | Software Developer"
    document.querySelector('meta[name="description"]')?.setAttribute("content", language === "pt"
      ? "Estudante de Engenharia Informática na FEUP. Desenvolvimento de websites, aplicações e soluções de software."
      : "Computer Engineering student at FEUP building websites, web applications, and practical software solutions.")
    try { localStorage.setItem("portfolio-language", language) } catch { /* storage may be disabled */ }
  }, [language])
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
export const useLanguage = () => useContext(LanguageContext)
export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  return <div role="group" aria-label="Website language / Idioma do site" className="flex shrink-0 rounded-lg border border-slate-700 p-1 text-xs font-semibold">
    <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} className={`rounded px-2 py-1.5 transition ${language === "en" ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:text-white"}`}>EN</button>
    <button type="button" onClick={() => setLanguage("pt")} aria-pressed={language === "pt"} className={`rounded px-2 py-1.5 transition ${language === "pt" ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:text-white"}`}>PT</button>
  </div>
}
