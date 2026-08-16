import { NativeSelect, Button, Flex } from "@chakra-ui/react"
import { departments } from "../api/departments";
import { useState } from "react";

const Departments = ({register, onSubmit}) => {
    const [_, setCurDept] = useState(null);

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
                                key={departmentId}
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