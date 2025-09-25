import CustomerSayCard from "../ui/CustomerSayCard";

export default function CustomerSay() {
  return (
    <section className="container mt-[150px] text-center">
        <h2 className="text-[40px] font-medium">What Our Customers Say</h2>
        <p className="text-[#969696]">Real experiences. Authentic style. See why everyone loves Véon</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mt-[50px]">
            {
                Array(9).fill().map((_, i) => (
                    <CustomerSayCard key={i} />
                ))
            }
        </div>
    </section>
  )
}
