package org.kevoree

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
trait NodeType : org.kevoree.modeling.api.KMFContainer , org.kevoree.LifeCycleTypeDefinition {
public fun getManagedPrimitiveTypes() : List<org.kevoree.AdaptationPrimitiveType>
public fun setManagedPrimitiveTypes(p : List<org.kevoree.AdaptationPrimitiveType>)
public fun getManagedPrimitiveTypeRefs() : List<org.kevoree.AdaptationPrimitiveTypeRef>
public fun setManagedPrimitiveTypeRefs(p : List<org.kevoree.AdaptationPrimitiveTypeRef>)
open var managedPrimitiveTypes : List<org.kevoree.AdaptationPrimitiveType>
fun addManagedPrimitiveTypes(managedPrimitiveTypes : org.kevoree.AdaptationPrimitiveType)
fun addAllManagedPrimitiveTypes(managedPrimitiveTypes :List<org.kevoree.AdaptationPrimitiveType>)
fun removeManagedPrimitiveTypes(managedPrimitiveTypes : org.kevoree.AdaptationPrimitiveType)
fun removeAllManagedPrimitiveTypes()
fun findManagedPrimitiveTypesByID(key : String?) : org.kevoree.AdaptationPrimitiveType?
open var managedPrimitiveTypeRefs : List<org.kevoree.AdaptationPrimitiveTypeRef>
fun addManagedPrimitiveTypeRefs(managedPrimitiveTypeRefs : org.kevoree.AdaptationPrimitiveTypeRef)
fun addAllManagedPrimitiveTypeRefs(managedPrimitiveTypeRefs :List<org.kevoree.AdaptationPrimitiveTypeRef>)
fun removeManagedPrimitiveTypeRefs(managedPrimitiveTypeRefs : org.kevoree.AdaptationPrimitiveTypeRef)
fun removeAllManagedPrimitiveTypeRefs()
fun findManagedPrimitiveTypeRefsByID(key : String?) : org.kevoree.AdaptationPrimitiveTypeRef?
}
