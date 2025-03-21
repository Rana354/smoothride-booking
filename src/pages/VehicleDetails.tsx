
import { useParams } from "react-router-dom";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function VehicleDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Vehicle Details (ID: {id})</h1>
            <p className="text-muted-foreground mb-8">
              This is a placeholder for the vehicle details page. In a complete implementation, 
              this would show detailed information about the selected vehicle.
            </p>
            
            <div className="flex gap-4 mt-8">
              <Link to={`/booking/${id}`}>
                <Button className="btn-hover">Book This Vehicle</Button>
              </Link>
              <Link to="/vehicles">
                <Button variant="outline" className="btn-hover">Back to Listings</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
