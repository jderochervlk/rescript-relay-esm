
import RelayServerSSR from 'react-relay-network-modern-ssr/lib/server.js';

import { makeNetwork } from './relayNetwork.mjs';

let _ = makeNetwork(new RelayServerSSR())