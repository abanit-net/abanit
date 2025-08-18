import { Separator } from "@/components/ui/separator";

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
    {children}
  </div>
);

export function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 px-4 relative">
      <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">درباره آبانیت</h3>
            <p className="text-muted-foreground leading-relaxed">
              ارائه دهنده خدمات فناوری اطلاعات و راهکارهای دیجیتال برای کسب و کارها با بیش از یک دهه تجربه
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">خدمات</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  طراحی سایت
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  سئو و بهینه‌سازی
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  هوش مصنوعی
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  طراحی گرافیک
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C15.5 17.4 19 14.1764 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 14.1764 8.5 17.4 12 21Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>تهران، خیابان ولیعصر</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9987 21.4142 21.3738C21.0391 21.7489 20.5109 21.9596 19.96 21.96C18.3248 21.9599 16.7087 21.6261 15.212 20.98C13.8328 20.3879 12.5871 19.5461 11.547 18.503C10.5039 17.4629 9.66214 16.2172 9.07 14.838C8.42114 13.3391 8.08721 11.7203 8.09 10.083C8.09046 9.53285 8.30116 9.00526 8.67572 8.6307C9.05028 8.25614 9.57752 8.0454 10.127 8.045H13.127C14.1415 8.03477 14.9799 8.79644 15.072 9.804C15.1559 10.7094 15.364 11.5981 15.691 12.448C15.9108 13.0781 15.7916 13.7800 15.367 14.307L14.257 15.417C14.7974 16.5009 15.5181 17.4865 16.3872 18.3556C17.2563 19.2247 18.2419 19.9454 19.325 20.486L20.435 19.376C20.9618 18.9514 21.6633 18.8322 22.293 19.052C23.1429 19.379 24.0316 19.5871 24.937 19.671C25.9657 19.7657 26.7223 20.6287 26.692 21.653L22 16.92Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>info@abanit.net</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">شبکه‌های اجتماعی</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" aria-label="LinkedIn">
                <SocialIcon>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </a>
              <a href="#" aria-label="Instagram">
                <SocialIcon>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </a>
              <a href="#" aria-label="Twitter">
                <SocialIcon>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12397C16.6767 2.90125 15.7395 2.95718 14.8821 3.28305C14.0247 3.60892 13.2884 4.19438 12.773 4.95372C12.2575 5.71305 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialIcon>
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} آبانیت. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
