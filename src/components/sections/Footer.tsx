export function Footer() {
  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">درباره آبانیت</h3>
          <p className="text-muted-foreground">
            ارائه دهنده خدمات فناوری اطلاعات و راهکارهای دیجیتال برای کسب و کارها
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">خدمات</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                طراحی سایت
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                سئو و بهینه‌سازی
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                هوش مصنوعی
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                طراحی گرافیک
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
          <ul className="space-y-2">
            <li className="text-muted-foreground">تهران، خیابان ولیعصر</li>
            <li className="text-muted-foreground">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li className="text-muted-foreground">ایمیل: info@abanit.net</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">شبکه‌های اجتماعی</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                لینکدین
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                اینستاگرام
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                توییتر
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-muted-foreground">
        © {new Date().getFullYear()} آبانیت. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
