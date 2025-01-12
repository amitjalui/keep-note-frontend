import pluginsList from './ToolkbarbarIconsList'
import { ToolbarList, ToolbarButton} from './Toolbar.styles';

const Toolbar = () => {
  return (
    <ToolbarList>
      {
        pluginsList.map(plugin => (
          <ToolbarButton key={plugin.id}>
            <plugin.Icon />
          </ToolbarButton>
        ))
      }
    </ToolbarList>
  )
}

export default Toolbar;
