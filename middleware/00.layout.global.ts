import type { LayoutKey } from "#build/types/layouts";

const layoutMap: Array<[string, LayoutKey]> = [
  ["/custom", "custom"], // priority / order matters, since "/custom" also starts with "/"
  ["/", "default"],
]

export default defineNuxtRouteMiddleware((to, from) => {
  const layoutState = useState("layout", () => "default")
  const layout = layoutMap.find(([path]) => to.path.startsWith(path))?.[1]
  if (layout) {
      setPageLayout(layout)
      layoutState.value = layout
  }
  return
})