import api from "@/utils/api";
import { URI_BEHAVIOR, URI_CHILD_BEHAVIOR, URI_CHILDREN } from "./endpoints";
import { handleError } from "@/utils/errorHandler";

export const getTotalChildren = async () => {
  try {
    const response = await api.get(URI_CHILDREN);
    return response.data.children;
  } catch (error) {
    handleError(error);
  }
};

export const getChildById = async (id) => {
  try {
    const response = await api.get(URI_CHILDREN+"/"+id);
    //console.log(response.data.child);
    return response.data.child;
  } catch (error) {
    handleError(error);
  }
};

export const updateStatusChild = async (id) =>{
  try {
    const response = await api.patch(URI_CHILDREN+"/checkStatus/"+id);
    return response.data.child;
  } catch (error) {
    handleError(error);
  }
}

export const updateChild = async (id, child) =>{
  try {
    const response = await api.patch(URI_CHILDREN+"/"+id, child);
    return response.data.child;
  } catch (error) {
    handleError(error);
  }
}
  
export const getTotalBehaviors = async () => {
  try {
    const response = await api.get(URI_BEHAVIOR);
    return response.data.behaviors;
  } catch (error) {
    handleError(error);
  }
};

export const getTotalChildBehavior = async () => {
  try {
    const response = await api.get(URI_CHILD_BEHAVIOR);
    return response.data.childBehaviors;
  } catch (error) {
    handleError(error);
  }
};

export const createChildBehavior = async (childBehavior) => {
  try {
    const response = await api.post(URI_CHILD_BEHAVIOR, childBehavior);
    return response.data.childBehavior;

  } catch (error) {
    handleError(error);
  }
};

export const editChildBehaviorApi = async (childId, behaviorId, newBehavior) =>{
  try{
    const response = await api.put(URI_CHILD_BEHAVIOR + `/${childId}/${behaviorId}`, newBehavior);
    return response.data.childBehavior;

  } catch (error) {
    handleError(error);
  }
}

export const deleteChildBehaviorApi = async (childId, behaviorId, deletedChildBehavior) =>{
  try{
    const response = await api.delete(
      URI_CHILD_BEHAVIOR + `/${childId}/${behaviorId}`,{data:{deletedChildBehavior},}
      
    );
    
    return response.data.childBehavior;

  } catch (error) {
    handleError(error);
  }
}