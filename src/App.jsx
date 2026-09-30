import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomeLayout from "./Outlet/outlet";
import Projects from "./Projects/projects";
import BlogHero from "./Pages/Blogs";

const Home = lazy(() => import("./Pages/Home"));
const AIAndML = lazy(() => import("./Pages/AI&ML"));
const AIAndAutomation = lazy(() => import("./Pages/AI&Automation"));
const AIAutomationAgency = lazy(() => import("./Pages/AI_Automation_Agency"));
const GenerativeAI = lazy(() => import("./Pages/Generative-AI"));
const GetAQuoteSection = lazy(() => import("./Pages/Quote"));
const ComputerVision = lazy(() => import("./Pages/Computer-Vision"));
const AIChatbotDevelpment = lazy(
  () => import("./Pages/AI_Chatbot_Development"),
);
const WebApplication = lazy(() => import("./Pages/WebApplications"));
const EcommercePlatforms = lazy(() => import("./Pages/ecommerce-platforms"));
const TechnologyServicePage = lazy(
  () => import("./Pages/TechnologyServicePage"),
);
const HireDeveloperHeroSection = lazy(() => import("./Pages/HiringDev"));
const SoftwareDevelopmentHero = lazy(() => import("./Pages/DetailsPage"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const SoftwareDevelopmentPage = lazy(() => import("./Pages/AboutUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "ai-ml-development-services", element: <AIAndML /> },
      { path: "ai-agent-development-services", element: <AIAndAutomation /> },
      { path: "ai-automation-agency", element: <AIAutomationAgency /> },
      { path: "generative-ai", element: <GenerativeAI /> },
      { path: "quote", element: <GetAQuoteSection /> },
      {
        path: "computer-vision-development-services",
        element: <ComputerVision />,
      },
      { path: "ai-chatbot-development", element: <AIChatbotDevelpment /> },
      { path: "web-application-development", element: <WebApplication /> },
      { path: "ecommerce-platforms", element: <EcommercePlatforms /> },
      { path: "technology-sevices", element: <TechnologyServicePage /> },
      { path: "hiring-developers", element: <HireDeveloperHeroSection /> },
      { path: "case-studies", element: <SoftwareDevelopmentHero /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: ":page/contact-us", element: <ContactUs /> },
      { path: "about-us", element: <SoftwareDevelopmentPage /> },
      { path: ":page/about-us", element: <SoftwareDevelopmentPage /> },
      { path: "our-work", element: <Projects /> },
      { path: ":page/our-work", element: <Projects /> },
      { path: "blogs", element: <BlogHero /> },
      { path: ":page/blogs", element: <BlogHero /> },
    ],
  },
]);

function RouteFallback() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-yellow-500" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
