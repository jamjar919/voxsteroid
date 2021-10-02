import bpy

# Useful shortcut
scene = bpy.context.scene

print(scene.objects.keys())

''' Removing initial objects'''
# Deselect all
bpy.ops.object.select_all(action='DESELECT')

# Select the cube and light
bpy.data.objects['Cube'].select_set(True) 
bpy.data.objects['Light'].select_set(True)

# Delete the cube and light
bpy.ops.object.delete() 


''' Set up sun light '''
# create light datablock, set attributes
light_data = bpy.data.lights.new(name="Sun", type='SUN')


# create new object with our light datablock
light_object = bpy.data.objects.new(name="Sun", object_data=light_data)

# link light object
bpy.context.collection.objects.link(light_object)

# make it active 
bpy.context.view_layer.objects.active = light_object

dg = bpy.context.evaluated_depsgraph_get() 
dg.update()

# Set light angles
bpy.data.objects['Sun'].select_set(True)
bpy.context.object.rotation_euler[0] = 1.74533
bpy.context.object.rotation_euler[1] = 3.49066
bpy.context.object.rotation_euler[2] = 0.5


''' Set up camera '''
bpy.data.cameras['Camera'].type = 'ORTHO'
bpy.data.cameras['Camera'].ortho_scale = 17.1012



''' Import STL file '''
# Import the STL file
bpy.ops.import_mesh.stl(filepath="/home/michael/repos/Asteroids/blender_scripts/216kleopatra.stl")

bpy.context.space_data.params.filename = "test.blend"




