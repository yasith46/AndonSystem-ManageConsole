import { createBoard } from '@wixc3/react-board';
import { Dash } from '../../../components/dash/dash';

export default createBoard({
    name: 'Dash',
    Board: () => <Dash />,
    isSnippet: true,
});
