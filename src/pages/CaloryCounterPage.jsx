import { Loader } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Totals from "@/components/calories-counter/Totals";
import { useCalories } from "@/hooks/calories-counter/useCalories";
import CreateCookiesForm from "@/components/calories-counter/CreateCookiesForm";
import AddCookiesForm from "@/components/calories-counter/AddCookiesForm";
import DeleteCookiesForm from "@/components/calories-counter/DeleteCookiesForm";
import ButtonBack from "@/components/ButtonBack";

const CaloryCounterPage = () => {
  const {
    handleChangeValueTab,
    handleSubmitCreateCookie,
    handleSubmitAddCookies,
    cookies,
    handleResetCalories,
    handleDeleteCookie,
    openDeleteDialog,
    handleCloseDialog,
    handleOpenDialog,
    loading,
    tabValue,
  } = useCalories();

  if (loading) {
    return (
      <div className="flex flex-row items-center justify-center h-screen">
        <Loader className="animate-spin size-5 text-muted-foreground" />
        <p className="font-DynaPuff ml-2 text-base text-center">Cargando...</p>
      </div>
    );
  }
  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray font-DynaPuff">
      <div className="max-w-6xl mx-auto px-3">
        <h1 className="text-stiletto text-6xl font-MountainsOfChristmas pt-10 text-center">
          Contador de calorias para Santa Claus
        </h1>
        <ButtonBack/>
        <Totals handleResetCalories={handleResetCalories}/>
        <Tabs
          defaultValue="create"
          className="w-full mb-5 space-y-5"
          onValueChange={handleChangeValueTab}
          value={tabValue}
        >
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-fit bg-plantation text-white ">
            <TabsTrigger value="create">Crear galleta</TabsTrigger>
            <TabsTrigger value="add">Agregar galletas</TabsTrigger>
            <TabsTrigger value="delete">Eliminar galleta</TabsTrigger>
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
          <TabsContent value="delete">
            <DeleteCookiesForm
              handleSubmitForm={handleDeleteCookie}
              cookies={cookies}
              open={openDeleteDialog}
              handleCloseDialog={handleCloseDialog}
              handleOpenDialog={handleOpenDialog}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CaloryCounterPage;
