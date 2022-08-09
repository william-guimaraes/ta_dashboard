import * as S from './styles'

interface Props {
    description: string
}

export const UsecaseDescription = ({ description }: Props) => <S.Description>
    <S.DescriptionTitle>Description</S.DescriptionTitle>
    {description}
</S.Description>