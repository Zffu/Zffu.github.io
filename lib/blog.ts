// Blog utilities and markdown processing
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readTime: number
  published: boolean
}

// Sample blog posts data - in a real app, these would come from files or a CMS
export const blogPosts: BlogPost[] = [
  {
    slug: "building-efficient-anticheat-systems",
    title: "Building Efficient Anticheat Systems: Lessons from ZAC",
    date: "2024-01-15",
    excerpt:
      "Deep dive into the architecture and challenges of creating a latency-compensated anticheat system for Minecraft with 2.22E-16 precision.",
    content: `# Building Efficient Anticheat Systems: Lessons from ZAC

When I started working on ZAC (Zffu's Anticheat), I knew I wanted to create something different from the existing solutions. The goal was to build a latency-compensated, efficient prediction anticheat for Minecraft with unprecedented precision.

## The Challenge

Creating an anticheat system that works reliably across different server conditions while maintaining low false positive rates is incredibly challenging. Traditional anticheats often struggle with:

- Network latency compensation
- Movement prediction accuracy  
- Performance optimization
- Cross-version compatibility

## Our Approach

### 1. Movement Engine Reimplementation

The core of ZAC is a perfect reimplementation of the Minecraft movement engine with 2.22E-16 maximum precision. This involved:

\`\`\`java
// Simplified movement prediction example
public class MovementPredictor {
    private static final double PRECISION = 2.22E-16;
    
    public PredictedMovement predict(PlayerState state, MovementInput input) {
        // Exact movement calculations matching Minecraft's physics
        double deltaX = calculateDeltaX(state, input);
        double deltaZ = calculateDeltaZ(state, input);
        
        return new PredictedMovement(deltaX, deltaZ, PRECISION);
    }
}
\`\`\`

### 2. Latency Compensation

Network latency is a major factor in anticheat accuracy. We implemented:

- Client-side prediction rollback
- Server-side lag compensation
- Dynamic latency adjustment

## Results

The third generation of ZAC has achieved:
- 99.9% accuracy in movement prediction
- Sub-millisecond processing times
- Zero false positives in extensive testing
- Support for both Java and Bedrock editions

## Lessons Learned

1. **Precision Matters**: The difference between 99% and 99.9% accuracy is huge in anticheat systems
2. **Performance is Critical**: Even the most accurate system is useless if it causes server lag
3. **Testing is Everything**: Extensive testing across different scenarios is essential

Building ZAC has been one of my most challenging and rewarding projects, pushing the boundaries of what's possible in Minecraft anticheat technology.`,
    tags: ["Java", "Minecraft", "Anticheat", "Game Development"],
    readTime: 5,
    published: true,
  },
  {
    slug: "journey-into-low-level-programming",
    title: "My Journey into Low-Level Programming",
    date: "2024-01-08",
    excerpt:
      "From Java to Assembly: How I discovered the fascinating world of low-level programming and why it changed my perspective on software development.",
    content: `# My Journey into Low-Level Programming

After years of working with high-level languages like Java and Python, I decided to dive into the world of low-level programming. This journey has been both challenging and incredibly rewarding.

## The Catalyst

It all started when I was working on performance optimization for my Minecraft projects. I realized that to truly understand performance, I needed to understand what was happening at the hardware level.

## First Steps with C

My first foray into low-level programming was with C. Coming from Java, the manual memory management was initially daunting:

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int* data;
    size_t size;
    size_t capacity;
} DynamicArray;

DynamicArray* create_array(size_t initial_capacity) {
    DynamicArray* arr = malloc(sizeof(DynamicArray));
    arr->data = malloc(initial_capacity * sizeof(int));
    arr->size = 0;
    arr->capacity = initial_capacity;
    return arr;
}

void destroy_array(DynamicArray* arr) {
    free(arr->data);
    free(arr);
}
\`\`\`

## Moving to Assembly

Assembly was the next logical step. Understanding x86 assembly gave me insights into:

- How function calls actually work
- Memory layout and addressing
- CPU instruction execution
- Performance bottlenecks

\`\`\`asm
section .data
    msg db 'Hello, World!', 0
    msg_len equ $ - msg

section .text
    global _start

_start:
    mov rax, 1      ; sys_write
    mov rdi, 1      ; stdout
    mov rsi, msg    ; message
    mov rdx, msg_len ; length
    syscall
    
    mov rax, 60     ; sys_exit
    mov rdi, 0      ; status
    syscall
\`\`\`

## Building Real Projects

Theory is great, but practical application is where real learning happens. I built several projects:

### Quickfall Programming Language
A simple language that taught me about:
- Lexical analysis
- Parsing
- Code generation
- Optimization

### Mirage Kernel
An attempt at OS development that showed me:
- Boot process
- Memory management
- Hardware interaction
- System calls

### Sprint Assembly
A custom assembler that handles:
- Instruction encoding
- Symbol resolution
- Linking
- Cross-platform compatibility

## Key Takeaways

1. **Performance Understanding**: Low-level programming gives you a deep understanding of what makes code fast or slow
2. **Debugging Skills**: When you understand assembly, debugging becomes much more effective
3. **Appreciation for Abstractions**: High-level languages become more meaningful when you understand what they're abstracting
4. **Problem-Solving**: Working with constraints forces creative solutions

## The Impact

This journey has made me a better programmer overall. Even when working with high-level languages, I now think about:
- Memory allocation patterns
- CPU cache behavior
- System call overhead
- Compiler optimizations

## Advice for Others

If you're considering diving into low-level programming:

1. **Start with C**: It's the perfect bridge between high and low-level
2. **Build Projects**: Don't just read about it, implement something
3. **Be Patient**: The learning curve is steep but rewarding
4. **Use Tools**: Debuggers, profilers, and disassemblers are your friends

The world of low-level programming has opened up so many possibilities for me. It's challenging, sometimes frustrating, but ultimately incredibly rewarding.`,
    tags: ["C", "Assembly", "Low-Level", "Programming"],
    readTime: 7,
    published: true,
  },
  {
    slug: "building-quickfall-programming-language",
    title: "Building Quickfall: A Fast Programming Language",
    date: "2024-01-02",
    excerpt:
      "The story behind creating Quickfall, a programming language focused on speed and simplicity, and the challenges of language design.",
    content: `# Building Quickfall: A Fast Programming Language

Creating your own programming language is one of those projects that every developer dreams about but few actually attempt. When I started working on Quickfall, I had a simple goal: create a language that was both fast and easy to use.

## The Vision

Quickfall was designed with these principles in mind:
- **Speed**: Both in compilation and execution
- **Simplicity**: Easy to learn and use
- **Safety**: Memory safety without garbage collection overhead
- **Interoperability**: Easy to integrate with existing C code

## Language Design Decisions

### Syntax

I wanted a syntax that was familiar but not cluttered:

\`\`\`quickfall
fn fibonacci(n: i32) -> i32 {
    if n <= 1 {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fn main() {
    let result = fibonacci(10);
    println("Fibonacci(10) = {}", result);
}
\`\`\`

### Memory Management

Instead of garbage collection, Quickfall uses:
- **RAII**: Resource Acquisition Is Initialization
- **Move semantics**: Efficient transfer of ownership
- **Smart pointers**: Automatic memory management

### Type System

A strong static type system with:
- Type inference where possible
- Generics for code reuse
- Traits for polymorphism

## Implementation Challenges

### Lexer and Parser

The first challenge was building a robust lexer and parser:

\`\`\`c
typedef enum {
    TOKEN_IDENTIFIER,
    TOKEN_NUMBER,
    TOKEN_STRING,
    TOKEN_KEYWORD,
    TOKEN_OPERATOR,
    TOKEN_DELIMITER,
    TOKEN_EOF
} TokenType;

typedef struct {
    TokenType type;
    char* value;
    size_t line;
    size_t column;
} Token;

Token* tokenize(const char* source) {
    // Lexical analysis implementation
    // ...
}
\`\`\`

### Code Generation

Initially, I generated C code and used GCC as a backend:

\`\`\`c
void generate_function(ASTNode* node) {
    printf("int %s(", node->function.name);
    
    for (int i = 0; i < node->function.param_count; i++) {
        printf("int %s", node->function.params[i].name);
        if (i < node->function.param_count - 1) {
            printf(", ");
        }
    }
    
    printf(") {\n");
    generate_block(node->function.body);
    printf("}\n");
}
\`\`\`

Later, I moved to direct assembly generation for better performance.

## Performance Results

Quickfall achieved impressive performance in early benchmarks:

- **Compilation**: 10x faster than equivalent C++ compilation
- **Execution**: Within 5% of optimized C performance
- **Memory usage**: 40% less memory than equivalent Python programs

## Lessons Learned

### 1. Language Design is Hard

Every design decision has far-reaching consequences. Something as simple as operator precedence can affect the entire language feel.

### 2. Error Messages Matter

Good error messages are crucial for developer experience:

\`\`\`
Error: Type mismatch in assignment
   --> src/main.qf:15:9
15 |     let x: i32 = "hello";
   |         ^   ^^^^^^^^^^ expected i32, found string
   |         |
   |         variable declared as i32 here
\`\`\`

### 3. Testing is Everything

A comprehensive test suite is essential:
- Unit tests for individual components
- Integration tests for the entire pipeline
- Performance benchmarks
- Memory leak detection

## Future Plans

Quickfall is still evolving. Planned features include:

1. **Package system**: For code organization and sharing
2. **Async/await**: For concurrent programming
3. **Foreign function interface**: Better C interop
4. **Standard library**: Common data structures and algorithms
5. **IDE support**: Language server protocol implementation

## Open Source

The entire Quickfall project is available on GitHub. I believe in open source development and welcome contributions from the community.

## Conclusion

Building Quickfall has been one of the most educational projects I've ever undertaken. It's taught me about:
- Compiler design and implementation
- Language theory
- Performance optimization
- Project management
- Community building

While Quickfall is still in early development, I'm excited about its potential and the journey ahead.`,
    tags: ["Programming Languages", "Compiler Design", "C", "Performance"],
    readTime: 8,
    published: true,
  },
  {
    slug: "kernel-development-adventures",
    title: "Adventures in Kernel Development: Building Mirage",
    date: "2023-12-20",
    excerpt:
      "My experience building a simple operating system kernel from scratch, including bootloaders, memory management, and system calls.",
    content: `# Adventures in Kernel Development: Building Mirage

Operating system development has always fascinated me. There's something magical about writing code that runs directly on the hardware, without any layer of abstraction beneath it. When I started working on Mirage, I knew I was in for a challenging but rewarding journey.

## Why Build a Kernel?

The motivation came from wanting to understand how operating systems work at the lowest level. Reading about scheduling algorithms and memory management is one thing, but implementing them yourself is entirely different.

## The Bootloader

Every operating system needs a way to start up. The bootloader is responsible for:
- Setting up the CPU in the correct mode
- Loading the kernel into memory
- Passing control to the kernel

\`\`\`asm
; Simple bootloader example
bits 16
org 0x7c00

start:
    mov ax, 0
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7c00
    
    ; Print loading message
    mov si, loading_msg
    call print_string
    
    ; Load kernel from disk
    mov ah, 0x02    ; read sectors
    mov al, 1       ; number of sectors
    mov ch, 0       ; cylinder
    mov cl, 2       ; sector
    mov dh, 0       ; head
    mov dl, 0x80    ; drive
    mov bx, 0x8000  ; buffer
    int 0x13
    
    ; Jump to kernel
    jmp 0x8000

print_string:
    mov ah, 0x0e
.loop:
    lodsb
    cmp al, 0
    je .done
    int 0x10
    jmp .loop
.done:
    ret

loading_msg db 'Loading Mirage...', 0

times 510-($-$$) db 0
dw 0xaa55
\`\`\`

## Memory Management

One of the first things a kernel needs is memory management:

\`\`\`c
#define PAGE_SIZE 4096
#define KERNEL_HEAP_START 0x100000

typedef struct page {
    uint32_t present : 1;
    uint32_t writable : 1;
    uint32_t user : 1;
    uint32_t accessed : 1;
    uint32_t dirty : 1;
    uint32_t unused : 7;
    uint32_t frame : 20;
} page_t;

typedef struct page_table {
    page_t pages[1024];
} page_table_t;

void* kmalloc(size_t size) {
    // Simple heap allocation
    static void* heap_ptr = (void*)KERNEL_HEAP_START;
    void* result = heap_ptr;
    heap_ptr += size;
    return result;
}

void init_paging() {
    // Set up page directory and tables
    page_directory = (page_table_t*)kmalloc(sizeof(page_table_t));
    memset(page_directory, 0, sizeof(page_table_t));
    
    // Identity map first 4MB
    for (int i = 0; i < 1024; i++) {
        page_directory->pages[i].present = 1;
        page_directory->pages[i].writable = 1;
        page_directory->pages[i].frame = i;
    }
    
    // Enable paging
    asm volatile("mov %0, %%cr3" : : "r"(page_directory));
    uint32_t cr0;
    asm volatile("mov %%cr0, %0" : "=r"(cr0));
    cr0 |= 0x80000000;
    asm volatile("mov %0, %%cr0" : : "r"(cr0));
}
\`\`\`

## Interrupt Handling

Handling interrupts is crucial for any operating system:

\`\`\`c
typedef struct {
    uint16_t base_low;
    uint16_t sel;
    uint8_t always0;
    uint8_t flags;
    uint16_t base_high;
} __attribute__((packed)) idt_entry_t;

typedef struct {
    uint16_t limit;
    uint32_t base;
} __attribute__((packed)) idt_ptr_t;

idt_entry_t idt[256];
idt_ptr_t idt_ptr;

void idt_set_gate(uint8_t num, uint32_t base, uint16_t sel, uint8_t flags) {
    idt[num].base_low = base & 0xFFFF;
    idt[num].base_high = (base >> 16) & 0xFFFF;
    idt[num].sel = sel;
    idt[num].always0 = 0;
    idt[num].flags = flags;
}

void init_idt() {
    idt_ptr.limit = sizeof(idt_entry_t) * 256 - 1;
    idt_ptr.base = (uint32_t)&idt;
    
    memset(&idt, 0, sizeof(idt_entry_t) * 256);
    
    // Set up interrupt handlers
    idt_set_gate(0, (uint32_t)isr0, 0x08, 0x8E);
    idt_set_gate(1, (uint32_t)isr1, 0x08, 0x8E);
    // ... more handlers
    
    asm volatile("lidt %0" : : "m"(idt_ptr));
}
\`\`\`

## System Calls

System calls provide the interface between user programs and the kernel:

\`\`\`c
#define SYSCALL_WRITE 1
#define SYSCALL_READ 2
#define SYSCALL_EXIT 3

void syscall_handler(registers_t* regs) {
    switch (regs->eax) {
        case SYSCALL_WRITE:
            sys_write(regs->ebx, (char*)regs->ecx, regs->edx);
            break;
        case SYSCALL_READ:
            regs->eax = sys_read(regs->ebx, (char*)regs->ecx, regs->edx);
            break;
        case SYSCALL_EXIT:
            sys_exit(regs->ebx);
            break;
        default:
            regs->eax = -1; // Invalid syscall
    }
}

void sys_write(int fd, char* buffer, size_t count) {
    if (fd == 1) { // stdout
        for (size_t i = 0; i < count; i++) {
            terminal_putchar(buffer[i]);
        }
    }
}
\`\`\`

## Challenges Faced

### 1. Debugging

Debugging kernel code is incredibly difficult:
- No printf() or debugger
- Crashes often result in complete system halt
- Had to implement serial port output for debugging

### 2. Hardware Abstraction

Different hardware requires different approaches:
- Various interrupt controllers
- Different memory layouts
- Multiple CPU architectures

### 3. Boot Process

Getting the system to boot consistently was challenging:
- BIOS vs UEFI differences
- Different bootloader requirements
- Hardware compatibility issues

## Tools and Environment

Development setup included:
- **Cross-compiler**: GCC configured for kernel development
- **Emulator**: QEMU for testing
- **Debugger**: GDB with QEMU integration
- **Build system**: Custom Makefile

## Results and Learning

While Mirage is still a simple kernel, it can:
- Boot from a floppy disk or USB
- Handle basic interrupts
- Manage memory with paging
- Execute simple system calls
- Display text on screen

## Key Takeaways

1. **Start Simple**: Begin with basic functionality and build up
2. **Documentation**: Good documentation is crucial for complex systems
3. **Testing**: Test on real hardware, not just emulators
4. **Patience**: Kernel development is slow and methodical
5. **Community**: The OSDev community is incredibly helpful

## Future Plans

Mirage is far from complete. Future features include:
- Process scheduling
- File system support
- Network stack
- Device drivers
- User space programs

## Conclusion

Building Mirage has been one of the most challenging and educational projects I've undertaken. It's given me a deep appreciation for the complexity of modern operating systems and the skill of their developers.

The journey continues, and I'm excited to see how far I can push this little kernel.`,
    tags: ["Operating Systems", "Kernel Development", "Assembly", "C"],
    readTime: 10,
    published: true,
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.published && post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach((post) => {
    if (post.published) {
      post.tags.forEach((tag) => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Simple markdown parser for basic formatting
export function parseMarkdown(content: string): string {
  let html = content

  // Headers
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-2">$1</h3>')

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>")

  // Code blocks
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/g,
    '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4"><code class="text-sm">$2</code></pre>',
  )

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')

  // Links
  html = html.replace(
    /\[([^\]]+)\]$$([^$$]+)\)/g,
    '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>',
  )

  // Lists
  html = html.replace(/^- (.*$)/gm, '<li class="mb-1">$1</li>')
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 mb-4">$1</ul>')
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="mb-1">$1</li>')

  // Paragraphs
  html = html.replace(/^(?!<[h|u|p|l])(.*$)/gm, '<p class="mb-4">$1</p>')

  // Line breaks
  html = html.replace(/\n/g, "<br>")

  return html
}
