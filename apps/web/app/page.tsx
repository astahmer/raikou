import {Badge} from "@raikou/core"

export default function Page() {
  return (
    <>
      <Badge leftSection={<span>1</span>} styles={{
        root: {
          backgroundColor: "red"
        }
      }}>
        Unstyled badge
      </Badge>
    </>
  );
}
