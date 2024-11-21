import { getTotalBehaviors } from "@/services/childrenBehaviorService";
import behaviorStore from "@/stores/behaviorStore";

export const useBehavior = () => {
  const { data, loading, error, setData, setLoading, setError } = behaviorStore();

  const loadBehaviors = async () => {
    setLoading(true);
    try {
      const behaviors = await getTotalBehaviors();
      setData(behaviors);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return { data, loading, error, loadBehaviors };
};