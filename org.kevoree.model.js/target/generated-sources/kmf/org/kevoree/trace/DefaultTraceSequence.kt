



package org.kevoree.trace

import org.kevoree.modeling.api.util.ActionType
import org.kevoree.modeling.api.trace.*

/**
 * Created by duke on 25/07/13.
 */

class DefaultTraceSequence() : org.kevoree.modeling.api.trace.TraceSequence {
override var traces : java.util.ArrayList<org.kevoree.modeling.api.trace.ModelTrace> = java.util.ArrayList<org.kevoree.modeling.api.trace.ModelTrace>()
override var factory : org.kevoree.modeling.api.KMFFactory? = org.kevoree.factory.MainFactory()
}