import { getEnv } from '../../../utils';
import {
    getStatus,
    getLastStatusChange,
} from '../../../status';
import { getSubscriptionQueueLength } from '../../../subscriptions';
import statusLabels from '../../../../static/lib/statusLabels';

const ENV = getEnv();


export default async (req, res) => {
    const status = await getStatus();
    res.json({
        status,
        label: statusLabels[status],
        lastChange: getLastStatusChange(),
        queueLength: getSubscriptionQueueLength(),
        environment: ENV === 'production' ? undefined : ENV,
    });
};