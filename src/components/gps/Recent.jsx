import { useRecentGps } from "@/hooks/gps/useRecentGps";
 
export const Recent = () => {
  const { addresses, isLoading, error } = useRecentGps();
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col mr-4">
      <h2 className="text-lg font-semibold mb-2">Direcciones buscadas recientemente</h2>
      {addresses && addresses.map(gps => (
        <div key={gps.id} className="border p-2 mb-1 rounded shadow-sm">{gps.address}</div>
      ))}
        
    </div>
  );
};