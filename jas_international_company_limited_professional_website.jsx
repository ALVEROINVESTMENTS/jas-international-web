import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Warehouse, Package, Users, Phone, Mail, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">JAS INTERNATIONAL COMPANY LIMITED</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Reliable Logistics, Fuel Transit Transportation, Warehousing & Cargo Handling Solutions in Tanzania
        </p>
        <Button size="lg" className="rounded-full bg-white text-orange-700 font-semibold">
          Get In Touch
        </Button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <p className="text-lg text-center max-w-4xl mx-auto">
          JAS International Company Limited is a professional logistics and transportation company based in Kigamboni, Dar es Salaam, Tanzania. We specialize in fuel transportation in transit, warehousing and storage, cargo handling, and other personal service activities. Our operations are driven by safety, reliability, and customer satisfaction.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="mx-auto mb-4 h-10 w-10 text-orange-600" />
              <h3 className="font-semibold text-xl mb-2">Fuel Transportation</h3>
              <p>Safe and efficient fuel transit transportation across Tanzania and the region.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Warehouse className="mx-auto mb-4 h-10 w-10 text-orange-600" />
              <h3 className="font-semibold text-xl mb-2">Warehousing & Storage</h3>
              <p>Secure and flexible storage facilities strategically located in Dar es Salaam.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="mx-auto mb-4 h-10 w-10 text-orange-600" />
              <h3 className="font-semibold text-xl mb-2">Cargo Handling</h3>
              <p>Professional cargo loading, unloading, consolidation, and handling services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-4 h-10 w-10 text-orange-600" />
              <h3 className="font-semibold text-xl mb-2">Personal Services</h3>
              <p>Tailored logistics and operational support services for business efficiency.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose JAS International</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          <li>✔ Reliable and timely service delivery</li>
          <li>✔ Strong safety and compliance standards</li>
          <li>✔ Experienced logistics professionals</li>
          <li>✔ Customer-focused operations</li>
          <li>✔ Strategic location in Kigamboni, Dar es Salaam</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-orange-700 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Phone className="mx-auto mb-3" />
            <p>+255 715 778 776</p>
          </div>
          <div>
            <Mail className="mx-auto mb-3" />
            <p>md@jasinternational.co.tz</p>
          </div>
          <div>
            <MapPin className="mx-auto mb-3" />
            <p>Kigamboni, Dar es Salaam, Tanzania</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.jasinternational.co.tz"
            className="underline font-semibold"
          >
            www.jasinternational.co.tz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-900 text-gray-300">
        © {new Date().getFullYear()} JAS International Company Limited. All Rights Reserved.
      </footer>
    </div>
  );
}
    
