export interface WasteIdea {
  id: number;
  title: string;
  description: string;
  type: 'paper' | 'plastic' | 'textile' | 'glass' | 'metal' | 'cardboard' | 'organic';
  difficulty: 'easy' | 'medium' | 'hard';
  timeRequired: string;
  materials: string[];
  steps: string[];
  image?: string;
}

export const wasteIdeas: WasteIdea[] = [
  // Paper Ideas
  {
    id: 1,
    title: 'Eco-Friendly Paper Notebooks',
    description: 'Create beautiful notebooks from recycled paper and cardboard.',
    type: 'paper',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Old paper', 'Cardboard', 'String', 'Needle', 'Decorative elements'],
    steps: [
      'Sort and clean recycled paper',
      'Cut papers to desired size',
      'Create cardboard covers',
      'Bind pages using string',
      'Decorate the covers'
    ],
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Paper Pulp Decorative Bowls',
    description: 'Create unique decorative bowls from paper pulp.',
    type: 'paper',
    difficulty: 'medium',
    timeRequired: '2 days',
    materials: ['Scrap paper', 'Water', 'Bowl mold', 'Paint', 'Sealant'],
    steps: [
      'Shred paper into small pieces',
      'Soak in water overnight',
      'Blend into pulp',
      'Shape using mold',
      'Let dry and decorate'
    ],
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Paper Seed Starter Pots',
    description: 'Make biodegradable seed starter pots from newspaper.',
    type: 'paper',
    difficulty: 'easy',
    timeRequired: '30 minutes',
    materials: ['Newspaper', 'Water', 'Seeds', 'Soil'],
    steps: [
      'Cut newspaper into squares',
      'Fold into pot shape',
      'Fill with soil',
      'Plant seeds',
      'Water and place in sunlight'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },

  // Plastic Ideas
  {
    id: 4,
    title: 'Plastic Bottle Hydroponic System',
    description: 'Build a small-scale hydroponic system using plastic bottles.',
    type: 'plastic',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Large plastic bottles', 'Growing medium', 'Nutrients', 'Plants', 'Pump system'],
    steps: [
      'Clean and prepare bottles',
      'Create planting holes',
      'Set up irrigation system',
      'Add growing medium',
      'Plant and maintain'
    ],
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Plastic Bottle Wind Chimes',
    description: 'Create melodic wind chimes from plastic bottles.',
    type: 'plastic',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Plastic bottles', 'Paint', 'String', 'Beads', 'Scissors'],
    steps: [
      'Clean and cut bottles',
      'Paint and decorate',
      'Attach strings',
      'Add beads',
      'Assemble final piece'
    ],
    image: 'https://images.unsplash.com/photo-1496429862132-5ab36b6ae330?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Plastic Container Organizers',
    description: 'Transform plastic containers into desk and drawer organizers.',
    type: 'plastic',
    difficulty: 'easy',
    timeRequired: '1 hour',
    materials: ['Plastic containers', 'Fabric', 'Glue', 'Scissors', 'Decorative paper'],
    steps: [
      'Clean containers thoroughly',
      'Cut fabric to size',
      'Apply glue and wrap containers',
      'Add decorative elements',
      'Arrange in desired space'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
  },

  // Textile Ideas
  {
    id: 7,
    title: 'Textile Wall Art',
    description: 'Transform old clothing into stunning wall art pieces.',
    type: 'textile',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Old clothes', 'Canvas', 'Scissors', 'Glue', 'Frame'],
    steps: [
      'Select and sort fabrics',
      'Cut into desired shapes',
      'Arrange design',
      'Secure to canvas',
      'Frame the artwork'
    ],
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Textile Plant Hangers',
    description: 'Craft beautiful macramé-style plant hangers from old t-shirts.',
    type: 'textile',
    difficulty: 'hard',
    timeRequired: '2-3 hours',
    materials: ['Old t-shirts', 'Scissors', 'Beads', 'Ring', 'Plants'],
    steps: [
      'Cut t-shirts into strips',
      'Create t-shirt yarn',
      'Knot basic pattern',
      'Add decorative elements',
      'Hang and style'
    ],
    image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Textile Tote Bags',
    description: 'Upcycle old clothing into stylish reusable tote bags.',
    type: 'textile',
    difficulty: 'medium',
    timeRequired: '2 hours',
    materials: ['Old shirts or dresses', 'Sewing machine', 'Thread', 'Scissors', 'Pins'],
    steps: [
      'Cut fabric to bag dimensions',
      'Pin pieces together',
      'Sew sides and bottom',
      'Create handles',
      'Finish seams and edges'
    ],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
  },

  // Glass Ideas
  {
    id: 10,
    title: 'Glass Jar Herb Garden',
    description: 'Create a beautiful indoor herb garden using glass jars.',
    type: 'glass',
    difficulty: 'easy',
    timeRequired: '1 hour',
    materials: ['Glass jars', 'Herbs', 'Potting soil', 'Pebbles', 'Labels'],
    steps: [
      'Clean jars thoroughly',
      'Add drainage pebbles',
      'Fill with potting soil',
      'Plant herb seedlings',
      'Label and arrange'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    title: 'Glass Bottle Vases',
    description: 'Transform wine bottles into elegant decorative vases.',
    type: 'glass',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Glass bottles', 'Glass cutter', 'Sandpaper', 'Paint', 'Brushes'],
    steps: [
      'Clean bottles and remove labels',
      'Cut bottles to desired height',
      'Sand rough edges smooth',
      'Apply decorative paint',
      'Let dry and add flowers'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    title: 'Glass Jar Lanterns',
    description: 'Create ambient lighting with decorated glass jar lanterns.',
    type: 'glass',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Glass jars', 'Wire', 'LED lights', 'Decorative paper', 'Glue'],
    steps: [
      'Clean jars and remove labels',
      'Wrap with decorative paper',
      'Create wire handles',
      'Insert LED lights',
      'Test and hang'
    ],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80'
  },

  // Metal Ideas
  {
    id: 13,
    title: 'Metal Can Planters',
    description: 'Convert tin cans into charming planters for small plants.',
    type: 'metal',
    difficulty: 'easy',
    timeRequired: '1 hour',
    materials: ['Tin cans', 'Drill', 'Paint', 'Soil', 'Small plants'],
    steps: [
      'Clean cans and remove labels',
      'Drill drainage holes',
      'Paint with rust-resistant paint',
      'Add soil and plants',
      'Arrange in garden or windowsill'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 14,
    title: 'Metal Wire Sculptures',
    description: 'Create artistic sculptures from discarded metal wire.',
    type: 'metal',
    difficulty: 'hard',
    timeRequired: '4-6 hours',
    materials: ['Metal wire', 'Wire cutters', 'Pliers', 'Base material', 'Paint'],
    steps: [
      'Design sculpture concept',
      'Cut wire to required lengths',
      'Shape and bend wire',
      'Assemble sculpture',
      'Mount on base and finish'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 15,
    title: 'Metal Can Wind Chimes',
    description: 'Make musical wind chimes from aluminum cans.',
    type: 'metal',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Aluminum cans', 'String', 'Wooden disc', 'Drill', 'Paint'],
    steps: [
      'Clean and prepare cans',
      'Cut cans to different lengths',
      'Drill holes for hanging',
      'Paint in desired colors',
      'Assemble with string and disc'
    ],
    image: 'https://images.unsplash.com/photo-1496429862132-5ab36b6ae330?auto=format&fit=crop&w=800&q=80'
  },

  // Cardboard Ideas
  {
    id: 16,
    title: 'Cardboard Storage Boxes',
    description: 'Create custom storage solutions from cardboard boxes.',
    type: 'cardboard',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Cardboard boxes', 'Decorative paper', 'Glue', 'Scissors', 'Labels'],
    steps: [
      'Clean and prepare boxes',
      'Cut decorative paper to size',
      'Apply glue and cover boxes',
      'Add handles if needed',
      'Label for organization'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 17,
    title: 'Cardboard Furniture',
    description: 'Build lightweight furniture pieces from cardboard.',
    type: 'cardboard',
    difficulty: 'hard',
    timeRequired: '4-8 hours',
    materials: ['Large cardboard sheets', 'Cutting tools', 'Glue', 'Reinforcement tape', 'Paint'],
    steps: [
      'Design furniture piece',
      'Cut cardboard to patterns',
      'Assemble with strong adhesive',
      'Reinforce joints with tape',
      'Paint and finish'
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 18,
    title: 'Cardboard Playhouse',
    description: 'Build an imaginative playhouse for children from large cardboard boxes.',
    type: 'cardboard',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Large cardboard boxes', 'Cutting tools', 'Paint', 'Decorative materials', 'Tape'],
    steps: [
      'Plan playhouse design',
      'Cut doors and windows',
      'Assemble box structure',
      'Paint and decorate',
      'Add finishing touches'
    ],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80'
  },

  // Organic Ideas
  {
    id: 19,
    title: 'Compost Bin System',
    description: 'Create a home composting system for organic waste.',
    type: 'organic',
    difficulty: 'medium',
    timeRequired: '2-3 hours setup',
    materials: ['Organic waste', 'Bin or container', 'Brown materials', 'Garden fork', 'Thermometer'],
    steps: [
      'Choose appropriate container',
      'Layer green and brown materials',
      'Add organic waste regularly',
      'Turn compost weekly',
      'Monitor temperature and moisture'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 20,
    title: 'Organic Fertilizer',
    description: 'Make nutrient-rich fertilizer from kitchen scraps.',
    type: 'organic',
    difficulty: 'easy',
    timeRequired: '30 minutes prep, 2-4 weeks processing',
    materials: ['Fruit peels', 'Vegetable scraps', 'Water', 'Container', 'Strainer'],
    steps: [
      'Collect organic kitchen scraps',
      'Chop into small pieces',
      'Soak in water for 2-4 weeks',
      'Strain liquid fertilizer',
      'Dilute and apply to plants'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 21,
    title: 'Seed Starting Mix',
    description: 'Create nutrient-rich seed starting mix from organic waste.',
    type: 'organic',
    difficulty: 'easy',
    timeRequired: '1 hour',
    materials: ['Composted organic matter', 'Coconut coir', 'Perlite', 'Seeds', 'Containers'],
    steps: [
      'Mix composted organic matter',
      'Add coconut coir for structure',
      'Include perlite for drainage',
      'Fill seed starting containers',
      'Plant seeds and water gently'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
  },

  // Additional Paper Ideas
  {
    id: 22,
    title: 'Paper Mache Sculptures',
    description: 'Create artistic sculptures using paper mache technique with old newspapers.',
    type: 'paper',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Old newspapers', 'Flour', 'Water', 'Paint', 'Brushes', 'Wire frame'],
    steps: [
      'Create wire frame structure',
      'Mix flour and water for paste',
      'Tear newspaper into strips',
      'Apply paper strips with paste',
      'Let dry and paint'
    ],
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 23,
    title: 'Handmade Paper Cards',
    description: 'Make beautiful greeting cards from recycled paper pulp.',
    type: 'paper',
    difficulty: 'easy',
    timeRequired: '2 hours',
    materials: ['Scrap paper', 'Blender', 'Screen', 'Decorative elements', 'Press'],
    steps: [
      'Blend paper with water',
      'Pour pulp onto screen',
      'Press and dry flat',
      'Cut to card size',
      'Decorate as desired'
    ],
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Additional Plastic Ideas
  {
    id: 24,
    title: 'Plastic Bottle Bird Feeders',
    description: 'Transform plastic bottles into colorful bird feeders for your garden.',
    type: 'plastic',
    difficulty: 'easy',
    timeRequired: '1 hour',
    materials: ['Plastic bottles', 'Wooden spoons', 'String', 'Bird seed', 'Drill'],
    steps: [
      'Clean bottles thoroughly',
      'Drill holes for perches',
      'Insert wooden spoons',
      'Add hanging string',
      'Fill with bird seed'
    ],
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 25,
    title: 'Plastic Container Greenhouse',
    description: 'Build a mini greenhouse using large plastic containers.',
    type: 'plastic',
    difficulty: 'hard',
    timeRequired: '4-6 hours',
    materials: ['Large plastic containers', 'Clear plastic sheets', 'Hinges', 'Thermometer', 'Ventilation fans'],
    steps: [
      'Cut container for door access',
      'Install clear plastic windows',
      'Add hinges for door',
      'Install ventilation system',
      'Set up shelving inside'
    ],
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 26,
    title: 'Plastic Bottle Vertical Garden',
    description: 'Create a space-saving vertical garden using plastic bottles.',
    type: 'plastic',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Plastic bottles', 'Rope', 'Drill', 'Potting soil', 'Plants', 'Support structure'],
    steps: [
      'Cut planting holes in bottles',
      'Drill drainage holes',
      'Thread rope through bottles',
      'Fill with soil and plants',
      'Hang on support structure'
    ],
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Additional Glass Ideas
  {
    id: 27,
    title: 'Glass Bottle Candle Holders',
    description: 'Create elegant candle holders from wine and beer bottles.',
    type: 'glass',
    difficulty: 'medium',
    timeRequired: '2 hours',
    materials: ['Glass bottles', 'Glass cutter', 'Sandpaper', 'Candles', 'Decorative stones'],
    steps: [
      'Cut bottles to desired height',
      'Sand edges smooth',
      'Clean thoroughly',
      'Add decorative stones',
      'Insert candles'
    ],
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 28,
    title: 'Glass Jar Terrariums',
    description: 'Build miniature ecosystems in glass jars.',
    type: 'glass',
    difficulty: 'easy',
    timeRequired: '1-2 hours',
    materials: ['Large glass jars', 'Small plants', 'Activated charcoal', 'Pebbles', 'Moss'],
    steps: [
      'Layer pebbles for drainage',
      'Add activated charcoal',
      'Add potting soil',
      'Plant small plants',
      'Add moss and decorations'
    ],
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Additional Metal Ideas
  {
    id: 29,
    title: 'Metal Can Acoustic Speakers',
    description: 'Amplify phone speakers using metal cans.',
    type: 'metal',
    difficulty: 'easy',
    timeRequired: '30 minutes',
    materials: ['Large metal cans', 'Sandpaper', 'Phone holder', 'Decorative paint'],
    steps: [
      'Clean cans thoroughly',
      'Sand any rough edges',
      'Cut phone slot if needed',
      'Paint decoratively',
      'Test acoustic amplification'
    ],
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 30,
    title: 'Metal Wire Garden Trellises',
    description: 'Create support structures for climbing plants using metal wire.',
    type: 'metal',
    difficulty: 'medium',
    timeRequired: '2-3 hours',
    materials: ['Metal wire', 'Wire cutters', 'Pliers', 'Stakes', 'Zip ties'],
    steps: [
      'Design trellis pattern',
      'Cut wire to required lengths',
      'Shape and connect wires',
      'Attach to support stakes',
      'Install in garden'
    ],
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Additional Textile Ideas
  {
    id: 31,
    title: 'Textile Braided Rugs',
    description: 'Create colorful rugs from old clothing and fabric scraps.',
    type: 'textile',
    difficulty: 'medium',
    timeRequired: '4-6 hours',
    materials: ['Old clothes', 'Scissors', 'Needle', 'Thread', 'Safety pins'],
    steps: [
      'Cut fabric into long strips',
      'Braid strips together',
      'Coil braids into rug shape',
      'Sew coils together',
      'Finish edges neatly'
    ],
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 32,
    title: 'Textile Memory Quilts',
    description: 'Transform meaningful clothing into memory quilts.',
    type: 'textile',
    difficulty: 'hard',
    timeRequired: '10-15 hours',
    materials: ['Meaningful clothing', 'Batting', 'Backing fabric', 'Sewing machine', 'Quilting thread'],
    steps: [
      'Cut clothing into squares',
      'Arrange in pleasing pattern',
      'Sew squares together',
      'Add batting and backing',
      'Quilt layers together'
    ],
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Additional Cardboard Ideas
  {
    id: 33,
    title: 'Cardboard Cat Castle',
    description: 'Build an elaborate castle playground for cats using cardboard boxes.',
    type: 'cardboard',
    difficulty: 'medium',
    timeRequired: '3-4 hours',
    materials: ['Various cardboard boxes', 'Cutting tools', 'Tape', 'Cat toys', 'Non-toxic paint'],
    steps: [
      'Design castle layout',
      'Cut doors and windows',
      'Connect boxes with tape',
      'Add ramps and levels',
      'Decorate and add toys'
    ],
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 34,
    title: 'Cardboard Desk Organizer',
    description: 'Create a custom desk organizer with multiple compartments.',
    type: 'cardboard',
    difficulty: 'easy',
    timeRequired: '2 hours',
    materials: ['Cardboard boxes', 'Ruler', 'Cutting tools', 'Decorative paper', 'Glue'],
    steps: [
      'Measure and plan compartments',
      'Cut cardboard pieces',
      'Assemble organizer structure',
      'Cover with decorative paper',
      'Add labels for organization'
    ],
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Additional Organic Ideas
  {
    id: 35,
    title: 'Organic Pest Deterrent Spray',
    description: 'Make natural pest control spray from organic kitchen waste.',
    type: 'organic',
    difficulty: 'easy',
    timeRequired: '1 hour prep, 1 week steeping',
    materials: ['Garlic peels', 'Onion scraps', 'Hot peppers', 'Water', 'Spray bottle'],
    steps: [
      'Collect organic scraps',
      'Steep in hot water for a week',
      'Strain liquid concentrate',
      'Dilute for spraying',
      'Apply to affected plants'
    ],
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 36,
    title: 'Organic Mulch from Leaves',
    description: 'Transform fallen leaves into nutrient-rich garden mulch.',
    type: 'organic',
    difficulty: 'easy',
    timeRequired: '2 hours',
    materials: ['Fallen leaves', 'Shredder or mower', 'Rake', 'Compost bin'],
    steps: [
      'Collect fallen leaves',
      'Shred leaves into small pieces',
      'Layer around plants',
      'Water lightly to settle',
      'Replenish as needed'
    ],
    image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];