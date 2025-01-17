import {FalkorDB} from 'falkordb'
import {FALKORDB_HOST, FALKORDB_PORT, FALKORDB_PASSWORD, FALKORDB_USER, FALKORDB_GRAPH_NAME} from './constants'

/**
 * Initialize the FalkorDB client
 */
export const falkordbClient = async () => await FalkorDB.connect({
    username: FALKORDB_USER,
    password: FALKORDB_PASSWORD,
    socket: {
        host: FALKORDB_HOST,
        port: FALKORDB_PORT
    }
})

/**
 * Connect to the FalkorDB graph. All queries will be executed on this graph
 */
export const falkordbGraph = async () => await falkordbClient().then((client) => client.selectGraph(FALKORDB_GRAPH_NAME))

