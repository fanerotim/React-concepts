import { NativeSelect, Button, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { departments } from "../api/departments";
import { useState } from "react";

const Departments = () => {
    const [_, setCurDept] = useState(null);
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <form onSubmit={onSubmit}>
            <Flex 
                direction={"column"} 
                alignItems={"center"} 
                width={"fit-content"} 
                margin={"2rem auto"}
                gap={"2"}
            >
                <NativeSelect.Root width={"sm"}>
                    <NativeSelect.Field
                        {...register("department")}
                        onChange={(e) => setCurDept(e.currentTarget.value)}
                        defaultValue={'Select an option'}
                    >
                        {departments.departments.map(({ departmentId, displayName }) => (
                            <option
                                value={departmentId}
                            >
                                {displayName}
                            </option>
                        ))}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                </NativeSelect.Root>
                <Button
                    size={"xs"}
                    type="submit"
                    alignSelf={"end"}
                >
                    Submit
                </Button>
            </Flex>
        </form>
    )
}

export default Departments;