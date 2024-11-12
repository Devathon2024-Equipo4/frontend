import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";
import { useGetIpDetails } from "@/hooks/gps/useGetIpDetails";
import { useEffect, useCallback } from "react";
import { useGpsStore } from "@/stores/gpsStore";

const Layout = () => {
  const ipDetails = useGpsStore((state) => state.ipDetails)
  const { fetchIpDetails } = useGetIpDetails();

  const memoizedFetchIpDetails = useCallback(() => {
    fetchIpDetails();
  }, [fetchIpDetails]);

  useEffect(() => {
    
    if (!Array.isArray(ipDetails) || ipDetails.length === 0) {
      memoizedFetchIpDetails();
    }
  }, [memoizedFetchIpDetails, ipDetails]);

  return (
    <div className="">
      <div className=''>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  )
}

export default Layout