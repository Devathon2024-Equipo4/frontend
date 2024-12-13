import React from 'react'

import HomePage from "../pages/HomePage";
import GpsPage from "../pages/GpsPage";
import ReindeerOrganizatorPage from "../pages/ReindeerOrganizatorPage";
import ElfRegistryPage from "../pages/ElfRegistryPage";
import ChildrenSorterPage from "../pages/ChildrenSorterPage";
import CaloryCounterPage from "../pages/CaloryCounterPage";
import LetterLectorPage from "../pages/LetterLectorPage";

const RoutesConfig = [
    { path: "/", element: <HomePage /> },
    { path: "/gps", element: <GpsPage /> },
    { path: "/reindeerOrg", element: <ReindeerOrganizatorPage /> },
    { path: "/elfRegistry", element: <ElfRegistryPage /> },
    { path: "/caloryCounter", element: <CaloryCounterPage /> },
    {
      path: "/childrenSorter",
      element: <ChildrenSorterPage />,
    },
    { path: "/letterLector", element: <LetterLectorPage /> },
  ]

export default RoutesConfig