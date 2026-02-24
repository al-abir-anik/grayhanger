import { contactConfig } from "@/config/contact";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href?: string;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: `${contactConfig.company.city}`,
    icon: <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary" />,
  },
  {
    title: "Call Us",
    subtitle: contactConfig.company.phone,
    icon: <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary" />,
  },
  {
    title: "Working Hours",
    subtitle: contactConfig.businessHours.weekday,
    icon: <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary" />,
  },
  {
    title: "Email Us",
    subtitle: contactConfig.emails.support,
    icon: <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary" />,
    href: `mailto:${contactConfig.emails.support}`,
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 border-b">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-gray-50 p-4"
        >
          {item?.icon}
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary">
              {item?.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
