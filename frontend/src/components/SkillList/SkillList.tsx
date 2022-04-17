import { FC, FormEvent, SyntheticEvent, useState } from "react"

import close from '../../assets/cancel.png'
import { TStack } from "../../models/IFreelancer"
import { ISkill } from "../../models/IOrder"
import { FieldTitle } from "../Field/Field.style"
import { Close, Input, Skill, SkillsWrapper } from "./SkillList.style"

interface ISkillList {
    skills: Array<{ name: string }>,
    remove: any,
    push: any,
    obj: Partial<TStack | ISkill>
}

export const SkillList: FC<ISkillList> = ({ skills, remove, push, obj }: ISkillList) => {
    const [Value, setValue] = useState<string>("")
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (<>
        <FieldTitle>Навыки</FieldTitle>
        <SkillsWrapper>{
            skills && skills.map((skill, i) => (<Skill>{skill.name}
                <Close src={close} onClick={(e: SyntheticEvent) => { remove(i); e.preventDefault() }} />
            </Skill>))
        }
            < Input placeholder='skill' type="text" value={Value} onChange={changeHandler} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter' && Value.length > 0) {
                    push({ ...obj, name: Value })
                    setValue("")
                    e.preventDefault();
                    return false;
                }
            }} />
        </SkillsWrapper>
    </>)
}