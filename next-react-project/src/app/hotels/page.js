import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch(
    "https://snowtooth-api-rest.fly.dev"
  );
  return res.json();
}



export default async function Page() {
  const data = await getData();
  return (    
    <main>
      <div>
        <h1>Hotel Details</h1>
        {/* <div>{JSON.stringify(data)}</div> */}
        <div>
          {data.map((hotel) => (
          <HotelBlock 
          key={hotel.id} 
          id={hotel.id}
          name={hotel.name} 
          capacity={hotel.capacity}/>
        ))}
        </div>
      </div>
    </main>
  );
}
