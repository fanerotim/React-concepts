import { Select, Button, Flex, Portal, createListCollection } from "@chakra-ui/react"
import { departments } from "../api/departments";

// data needs to be converted into a ListCollection as this is how the Select Component works
const departmentsCollection = createListCollection({
    items: departments.departments,
    itemToString: (department) => department.displayName,
    itemToValue: (department) => department.departmentId
})

const Departments = ({ onSubmit, Controller, control }) => {
    const formFields = Object.keys(control?._fields);

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
                    name={formFields[0] ?? ''}
                    render={({ field }) => (
                        <Select.Root
                            name={field.name}
                            value={field.value}
                            onValueChange={({ value }) => field.onChange(value)}
                            w={"xs"}
                            collection={departmentsCollection}
                        >
                            <Select.Label>
                                Choose a department
                            </Select.Label>
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Select a department" />
                                    <Select.Indicator />
                                </Select.Trigger>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {departmentsCollection.items.map((department) => (
                                            <Select.Item
                                                key={department.departmentId}
                                                item={department}
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
                <Button
                    type="submit"
                    size={"xs"}
                    alignSelf={"end"}
                >
                    Submit
                </Button>
            </Flex>
        </form >
    )
}

export default Departments;