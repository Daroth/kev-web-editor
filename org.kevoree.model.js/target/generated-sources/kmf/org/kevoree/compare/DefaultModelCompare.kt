



package org.kevoree.compare

import java.util.HashMap
import java.util.ArrayList
import org.kevoree.modeling.api.KMFContainer
import org.kevoree.modeling.api.trace.*

/**
 * Created by duke on 26/07/13.
 */


class DefaultModelCompare : org.kevoree.modeling.api.compare.ModelCompare {

override public fun createSequence(): org.kevoree.modeling.api.trace.TraceSequence {
    return org.kevoree.trace.DefaultTraceSequence()
}

}
