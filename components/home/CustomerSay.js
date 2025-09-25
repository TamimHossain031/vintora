import CustomerSayCard from "../ui/CustomerSayCard";

export default function CustomerSay() {
  return (
    <section className="container mt-[150px] text-center">
      <div className="title">
        <h2>What Our Customers Say</h2>
        <p>
          Real experiences. Authentic style. See why everyone loves Véon
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mt-[50px]">
        {Array(9)
          .fill()
          .map((_, i) => (
            <CustomerSayCard key={i} />
          ))}
      </div>
    </section>
  );
}
