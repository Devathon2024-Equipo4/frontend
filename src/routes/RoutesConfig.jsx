import React from 'react'

import HomePage from "../pages/HomePage";
import GpsPage from "../pages/GpsPage";
import ReindeerOrganizatorPage from "../pages/ReindeerOrganizatorPage";
import ElfRegistryPage from "../pages/ElfRegistryPage";
import ChildrenClassificatorPage from "../pages/ChildrenClassificatorPage";
import CaloryCounterPage from "../pages/CaloryCounterPage";
import LetterLectorPage from "../pages/LetterLectorPage";

const RoutesConfig = [
    { path: "/", element: <HomePage /> },
    { path: "/gps", element: <GpsPage /> },
    { path: "/reindeerOrg", element: <ReindeerOrganizatorPage /> },
    { path: "/elfRegistry", element: <ElfRegistryPage /> },
    { path: "/caloryCounter", element: <CaloryCounterPage /> },
    {
      path: "/childrenClassificator",
      element: <ChildrenClassificatorPage />,
    },
    { path: "/letterLector", element: <LetterLectorPage /> },
  ]

export default RoutesConfig