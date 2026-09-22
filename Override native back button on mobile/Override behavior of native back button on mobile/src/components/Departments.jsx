import { Select, Button, Flex, Portal, createListCollection } from "@chakra-ui/react"
import { departments } from "../api/departments";
import { useDepartment } from "../hooks/useDepartment";
import { useState } from "react";

// data needs to be converted into a ListCollection as this is how the Select Component works
// in TypeScript we should be able to pass a type to the createListCollection based on its doc: https://ark-ui.com/docs/collections/tree-collection 
const departmentsCollection = createListCollection({
    items: departments.departments,
    itemToString: (department) => department.displayName,
    itemToValue: (department) => department.departmentId
})

const Departments = ({ setDeptId, isLoading }) => {
    const { onSubmit, Controller, control } = useDepartment(setDeptId);
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    return (
        <form onSubmit={onSubmit}>
            <Flex
                direction={"column"}
                alignItems={"center"}
                width={"fit-content"}
                margin={"2rem auto"}
                gap={"2"}
            >
                <Controller
                    control={control}
                    name={"departments"}
                    render={({ field }) => (
                        <Select.Root
                            name={field.name}
                            value={field.value}
                            onValueChange={({ value }) => field.onChange(value)}
                            onOpenChange={({open}) => {
                                setIsSelectOpen(open)
                            }}
                            w={"xs"}
                            collection={departmentsCollection}
                        >
                            <Select.Label
                                fontSize={'xs'}
                            >
                                Choose a department
                            </Select.Label>
                            <Select.Control>
                                <Select.Trigger
                                    bg={'orange.300'}
                                    color={'black'}
                                >
                                    <Select.ValueText
                                        fontSize={'xs'}
                                        placeholder="Select a department"
                                    />
                                    <Select.Indicator />
                                </Select.Trigger>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content
                                        bg={'red.100/40'}
                                    >
                                        {departmentsCollection.items.map((department) => (
                                            <Select.Item
                                                key={department.departmentId}
                                                item={department}
                                                color={'brown'}
                                                fontSize={'xs'}
                                                _hover={{
                                                    cursor: 'pointer',
                                                    bg: 'yellow.200',
                                                    fontWeight: 'lighter'
                                                }}
                                            >
                                                <Select.ItemText>{department.displayName}</Select.ItemText>
                                            </Select.Item>
                                        )
                                        )}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>)
                    }
                />
                {!isSelectOpen && <Button
                    disabled={isLoading}
                    type="submit"
                    size={"xs"}
                    alignSelf={"end"}
                    bg={'yellow.200'}
                    color={'black'}
                >
                    Submit
                </Button>}
            </Flex>
        </form >
    )
}

export default Departments;