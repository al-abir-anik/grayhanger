import CheckoutForm from "@/components/checkout/CheckoutForm";
import Container from "@/components/layout/Container";
import Logo from "@/components/Logo";

const CheckoutPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-100">
      <header className="py-5 sticky top-0 z-50 bg-white backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto px-4">
          <Logo />
        </div>
      </header>

      <Container className="w-full py-10 flex-1">
        <CheckoutForm />
      </Container>

      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
};

export default CheckoutPage;
