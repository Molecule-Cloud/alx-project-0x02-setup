import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces";


const UsersCard: React.FC<UserProps> =( { 
    id, 
    name, 
    email, 
    username, 
    address:{street, suite, city, zipcode, geo:{lat, lng}},
    phone,
    website,
    company: {company_name, catchPhrase, bs}
    } ) => 
    {
    return (
        <>
        <div className="border p-4 rounded-lg">
        <h3 className="font-bold">{name}</h3>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        
        {/* Address */}
        <div className="mt-2">
            <p>Address: {street}, {city} {zipcode}</p>
            <p className="text-xs">Coordinates: {lat}, {lng}</p>
        </div>

        {/* Company */}
        <p>Company: {company_name}</p>
        <p className="italic">"{catchPhrase}"</p>
        </div>
        </>
    )
}


export default UsersCard;