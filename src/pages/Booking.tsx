
import { useParams } from "react-router-dom";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Booking() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Book Vehicle (ID: {id})</h1>
            <p className="text-muted-foreground mb-8">
              This is a placeholder for the booking page. In a complete implementation, 
              this would contain a booking form for the selected vehicle.
            </p>
            
            <div className="flex gap-4 mt-8">
              <Link to={`/payment/placeholder-booking-id`}>
                <Button className="btn-hover">Proceed to Payment</Button>
              </Link>
              <Link to={`/vehicles/${id}`}>
                <Button variant="outline" className="btn-hover">Back to Vehicle</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
