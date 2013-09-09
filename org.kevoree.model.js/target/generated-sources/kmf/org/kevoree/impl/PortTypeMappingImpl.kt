package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class PortTypeMappingImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.PortTypeMapping { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
}
public override var beanMethodName : String? = null
	 set(iP : String?){
internal_beanMethodName(iP, true)
	}//end of setter

	private fun internal_beanMethodName(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != beanMethodName){
val oldPath = path()
$beanMethodName = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_beanMethodName, beanMethodName))
}
	}
	}//end of setter
public override var serviceMethodName : String? = null
	 set(iP : String?){
internal_serviceMethodName(iP, true)
	}//end of setter

	private fun internal_serviceMethodName(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != serviceMethodName){
val oldPath = path()
$serviceMethodName = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_serviceMethodName, serviceMethodName))
}
	}
	}//end of setter
public override var paramTypes : String? = null
	 set(iP : String?){
internal_paramTypes(iP, true)
	}//end of setter

	private fun internal_paramTypes(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != paramTypes){
val oldPath = path()
$paramTypes = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_paramTypes, paramTypes))
}
	}
	}//end of setter
public override var generated_KMF_ID : String? = ""+Math.random() + java.util.Date().getTime()
	 set(iP : String?){
internal_generated_KMF_ID(iP, true)
	}//end of setter

	private fun internal_generated_KMF_ID(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != generated_KMF_ID){
val oldPath = path()
val oldId = internalGetKey()
val previousParent = eContainer();
val previousRefNameInParent = getRefInParent();
$generated_KMF_ID = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_generated_KMF_ID, generated_KMF_ID))
}
if(previousParent!=null){
previousParent.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, previousRefNameInParent!!, oldId,false,false);
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Att_generated_KMF_ID, path()))
}
	}
	}//end of setter
override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_beanMethodName -> {
this.internal_beanMethodName((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_serviceMethodName -> {
this.internal_serviceMethodName((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_paramTypes -> {
this.internal_paramTypes((value as? String), fireEvents)
}
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
    else -> { throw Exception("Can reflexively "+mutationType+" for "+refName + " on "+ this) }
}
}
override fun internalGetKey() : String? {
return  generated_KMF_ID
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                                          visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
            visitor.visit(paramTypes,org.kevoree.util.Constants.Att_paramTypes,this)
            visitor.visit(serviceMethodName,org.kevoree.util.Constants.Att_serviceMethodName,this)
            visitor.visit(beanMethodName,org.kevoree.util.Constants.Att_beanMethodName,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_PortTypeMapping;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getParamTypes() : String? { return paramTypes}
override public fun setParamTypes(internal_p : String?) { paramTypes = internal_p }
override public fun getServiceMethodName() : String? { return serviceMethodName}
override public fun setServiceMethodName(internal_p : String?) { serviceMethodName = internal_p }
override public fun getBeanMethodName() : String? { return beanMethodName}
override public fun setBeanMethodName(internal_p : String?) { beanMethodName = internal_p }
}
