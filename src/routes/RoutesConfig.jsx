import React from 'react'

import HomePage from "./HomePage";
import GpsPage from "./GpsPage";
import ReindeerOrganizatorPage from "./ReindeerOrganizatorPage";
import ElfRegistryPage from "./ElfRegistryPage";
import ChildrenClassificatorPage from "./ChildrenClassificatorPage";
import CaloryCounterPage from "./CaloryCounterPage";
import LetterLectorPage from "./LetterLectorPage";

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