import { createChildBehavior, deleteChildBehaviorApi, editChildBehaviorApi, getTotalChildBehavior } from "@/services/childrenBehaviorService";
import childBehaviorStore from "@/stores/childBehaviorStore";

export const useChildBehavior = () => {
  const { data, loading, error, setData, setLoading, setError } = childBehaviorStore();

  const loadChildBehaviors = async () => {
    setLoading(true);
    setError(null);
    try {
      const behaviors = await getTotalChildBehavior();
      setData(behaviors);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addChildBehavior = async (ChildBehavior) => {
    setLoading(true);
    setError(null);
    try {
      const createdBehavior = await createChildBehavior(ChildBehavior);
      setData([...data, createdBehavior]);
      return { success: true };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };
  const deleteChildbehavior = async (childId, behaviorId) =>{
    const deletedChildBehavior = { childId: childId, behaviorId: behaviorId };
    setLoading(true);
    setError(null);
    try{
      const deletedBehaviorChild = await deleteChildBehaviorApi(childId,behaviorId,deletedChildBehavior);
      //setData(data.filter((behaviorChild) => behaviorChild.id !== deletedBehaviorChild.id));
      return { success: true };
    }catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };


  const editChildbehavior = async(childId, behaviorId, newBehavior) =>{
    setLoading(true);
    setError(null);
    try{
      console.log(newBehavior);
      const editedBehaviorChild = await editChildBehaviorApi(childId,behaviorId, newBehavior);

      return { success: true };
    }catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, loadChildBehaviors, addChildBehavior, deleteChildbehavior, editChildbehavior};
};