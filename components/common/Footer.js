export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-[50px] w-full h-[600px] p-[80px 30px 40px] text-[#f8f8f8]">
      <div className="max-w-[1440px] flex gap-[10px] mx-auto">
        <div className="max-w-[572px] w-full space-y-5">
          <h3 className="text-[40px]">Test</h3>
          <p className="max-w-[200px]">Sign-up to receive the latest news from Véon.</p>
          <form className="max-w-[300px] space-y-1.5">
            <input type="text" placeholder="Enter your email address" className="w-full px-3 py-2 bg-white/10 rounded  transition-all duration-300" />
            <button type="submit" className="w-full px-3 py-2 text-sm bg-[#f8f8f8] text-[#1a1a1a] rounded font-medium">Subscribe</button>
          </form>
        </div>
        <div className="w-full"></div>
      </div>
    </footer>
  );
}
