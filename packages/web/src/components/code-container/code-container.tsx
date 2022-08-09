import { Collapse } from 'antd';
import { CopyBlock, dracula } from "react-code-blocks";

import * as S from './styles'

interface Props {
    children: React.ReactNode
}

const { Panel } = Collapse;

export const CodeContainer = ({ children }: Props) => <S.Container>
    <Collapse defaultActiveKey={[]}>
        <Panel header="Code Example" key="1">
            <CopyBlock
                language="typescript"
                text={children}
                codeBlock
                theme={dracula}
                showLineNumbers={false}
            />
        </Panel>
    </Collapse>
</S.Container>
