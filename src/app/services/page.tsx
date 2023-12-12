import ServicesCards from '@/Components/Services/ServicesCards'

export default function ServicesPage() {
  return (
    <section className="lg:px-28 p-10 grid gap-8">
        <h1 className="lg:text-[8rem] md:text-[5rem] text-[2rem] w-fit">
          Services
        </h1>

        <ServicesCards />
      </section>
  )
}