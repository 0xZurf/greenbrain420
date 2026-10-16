import PageHeader from "../components/PageHeader.jsx";
import Placeholder from "../components/Placeholder.jsx";
import { products } from "../data/content.js";

export default function Shop() {
  return (
    <>
      <PageHeader title="Shop" lede="Pieces we actually use. The store opens soon. Drop your email on the home page to hear first.">
        <span className="inline-block mt-6 rounded-full border border-kelly text-kelly-deep px-4 py-1.5 text-[0.9rem] font-semibold">
          Opening soon
        </span>
      </PageHeader>

      <section className="wrap pb-24">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name}>
              <Placeholder label="Product" ratio="1 / 1" />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="display-sm">{p.name}</h3>
                  <p className="text-muted text-[0.9rem] mt-1">{p.note}</p>
                </div>
                <span className="text-head font-semibold tabular-nums">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
