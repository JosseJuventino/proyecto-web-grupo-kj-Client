import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import CirculosCard from "../components/circulos-card/circulosCard";

function CirculosPage() {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-10">
        <h1 className="mb-5 text-3xl text-center">Resumen</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-auto">
          <CirculosCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CirculosPage;
