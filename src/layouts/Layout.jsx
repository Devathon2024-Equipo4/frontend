import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";
import { useGetIpDetails } from "@/hooks/gps/useGetIpDetails";
import { useEffect, useCallback } from "react";

const Layout = () => {
  
  const { fetchIpDetails } = useGetIpDetails();

  const memoizedFetchIpDetails = useCallback(() => {
    fetchIpDetails();
  }, [fetchIpDetails]);

  useEffect(() => {
    memoizedFetchIpDetails();
  }, [memoizedFetchIpDetails]);

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