import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Totals from "@/components/calories-counter/Totals";
import { useCalories } from "@/hooks/calories-counter/useCalories";
import CreateCookiesForm from "@/components/calories-counter/CreateCookiesForm";
import AddCookiesForm from "@/components/calories-counter/AddCookiesForm";

const CaloryCounterPage = () => {
  const {
    handleChangeValueTab,
    handleSubmitCreateCookie,
    handleSubmitAddCookies,
    cookies,
  } = useCalories();
  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray font-DynaPuff">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-stiletto text-3xl font-MountainsOfChristmas pt-10 text-center">
          Contador de calorias para Santa Claus
        </h1>
        <Totals />
        <Tabs
          defaultValue="create"
          className="w-full mt-10"
          onValueChange={handleChangeValueTab}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Crear galleta</TabsTrigger>
            <TabsTrigger value="add">Agregar galletas</TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <CreateCookiesForm handleSubmitForm={handleSubmitCreateCookie} />
          </TabsContent>
          <TabsContent value="add">
            <AddCookiesForm
              handleSubmitForm={handleSubmitAddCookies}
              cookies={cookies}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CaloryCounterPage;
